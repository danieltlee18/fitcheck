from fastapi import Depends, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
from routers.pool import pool
from queries.authenticator import authenticator


class RatingIn(BaseModel):
    category_1: float
    category_2: float
    category_3: float
    # outfit_id:  int


class RatingOut(BaseModel):
    id: int
    category_1: float
    category_2: float
    category_3: float
    outfit_id: int
    account_id: int


class RatingRepo:
    def check_rating_by_outfit_id_and_account_id(self, outfit_id, account_id)-> RatingOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                no_duplicates = db.execute(
                """
                SELECT outfit_id, account_id
                FROM ratings
                WHERE (outfit_id = %s and account_id = %s)
                """,
                [outfit_id, account_id]
                )
                if no_duplicates.fetchone():
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="You have already rated that outfit",
                    )
    def create_rating(
            self,
            rating: RatingIn,
            account_id: int,
            outfit_id: int
            ) -> RatingOut:
        if (
            rating.category_1 % 1 != 0 or rating.category_1 < 1 or rating.category_1 > 5
            or rating.category_2 % 1 != 0 or rating.category_2 < 1 or rating.category_2 > 5
            or rating.category_3 % 1 != 0 or rating.category_3 < 1 or rating.category_3 > 5
        ): ### no bad data no 500s would use for loop if more than 3 ratings
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Illegal rating value, value must be between between 0,5 inclusive and evenly divisible by .5",
            )
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO ratings
                        (category_1, category_2, category_3, outfit_id, account_id)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING
                        id, category_1, category_2, category_3, outfit_id, account_id;
                    """,
                    [rating.category_1, rating.category_2, rating.category_3, outfit_id, account_id]
                )
                db_rating = result.fetchall()[0]
                print("DB________RATING", db_rating[0])
                rating_out = RatingOut(
                    id=db_rating[0],
                    category_1=db_rating[1],
                    category_2=db_rating[2],
                    category_3=db_rating[3],
                    outfit_id=db_rating[4],
                    account_id=db_rating[5]
                    )
                avg = self.get_avg_rating(rating_out.outfit_id)
                self.update_outfit_average_rating(rating_out.outfit_id, avg)
                return rating_out

    def get_ratings(
            self,
            fit_id: int
    ) -> List[RatingOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, category_1, category_2, category_3, outfit_id, account_id
                        FROM ratings
                        WHERE (outfit_id = %s)
                        """,
                        [fit_id]
                    )
                    results = []
                    for record in db.fetchall():
                        results.append(
                            RatingOut(
                            id = record[0],
                            category_1 = record[1],
                            category_2 = record[2],
                            category_3 = record[3],
                            outfit_id = record[4],
                            account_id = record[5]
                            )
                        )
                    return results

        except Exception as e:
            print("eeeeeeeeeeeeeeee", e)
        return {"message" : "Could not get ratings"}

    def get_avg_rating(
            self,
            fit_id: int
    ) -> float:
        results = self.get_ratings(fit_id)
        print("aaaaaaaaaaaaaaaaaaaaa", results)
        total = 0
        for rating in results:
            total += rating.category_1 + rating.category_2 + rating.category_3
        print("BBBBBBBBBBBBBB", total)
        return  total/(len(results) * 3) if len(results) > 0 else 0
    def update_outfit_average_rating(self, outfit_id: int, avg_rating:float):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute("""
                        UPDATE outfits
                        SET avg_rating=%s
                        WHERE (outfit_id=%s)
                        """,
                        [avg_rating, outfit_id]
                    )
                    print("AVERAGE RATING:", avg_rating)
        except Exception:
            return Exception


    # def list_outfits(
    #         self
    # ) -> AllOutfits: #queries: OutfitQueries = Depends()
    #     try:
    #         with pool.connection() as conn:
    #             with conn.cursor() as db:
    #                 db.execute(
    #                     """
    #                     SELECT outfits.id, img_url, style, occasion, outfits.account_id, outfits.avg_rating, ratings.id, ratings.category_1, ratings.category_2, ratings.category_3, ratings.account_id, ratings.outfit_id
    #                     FROM outfits
    #                     LEFT JOIN ratings ON outfits.id = ratings.outfit_id
    #                     ORDER BY outfits.id
    #                     """
    #                 )
    #                 results = []
    #                 results_dict = {}
    #                 for record in db.fetchall():
    #                     if record[0] not in results_dict:
    #                         results_dict[record[0]] = OutfitOut(
    #                         id = record[0],
    #                         img_url = record[1],
    #                         style = record[2],
    #                         occasion = record[3],
    #                         account_id = record[4],
    #                         ratings = [],
    #                         avg_rating = record[5]
    #                         )
    #                         if record[6] is not None:
    #                             results_dict[record[0]].ratings.append(RatingOut(
    #                                 id = record[6],
    #                                 category_1 = record[7],
    #                                 category_2 = record[8],
    #                                 category_3 = record[9],
    #                                 account_id = record[10],
    #                                 outfit_id = record[11]
    #                             ))
    #                     else:
    #                         if record[6] is not None:
    #                             results_dict[record[0]].ratings.append(RatingOut(
    #                                 id = record[5],
    #                                 category_1 = record[7],
    #                                 category_2 = record[8],
    #                                 category_3 = record[9],
    #                                 account_id = record[10],
    #                                 outfit_id = record[11]
    #                             ))

    #                 for value in results_dict.values():
    #                     results.append(value)
    #                 return {"outfits": results}
    #     except Exception as e:
    #         print(e)
    #     return {"message" : "could not get all outfits"}
