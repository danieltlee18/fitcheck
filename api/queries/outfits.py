from pydantic import BaseModel
from typing import List
from routers.pool import pool
from queries.ratings import RatingOut
from queries.authenticator import authenticator
from fastapi import Depends, HTTPException, status

class OutfitIn(BaseModel):
    img_url: str
    style: str ##literal?
    occasion: str | None
    # account_id: int

class OutfitOut(BaseModel):
    img_url: str
    style: str
    occasion: str | None
    id: int
    account_id: int
    ratings: List[RatingOut]
    avg_rating: float

class AllOutfits(BaseModel):
    outfits : List[OutfitOut]


class OutfitRepo:
    def list_outfits(
            self
    ) -> AllOutfits: #queries: OutfitQueries = Depends()
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT outfits.id, img_url, style, occasion, outfits.account_id, outfits.avg_rating, ratings.id, ratings.category_1, ratings.category_2, ratings.category_3, ratings.account_id, ratings.outfit_id
                        FROM outfits
                        LEFT JOIN ratings ON outfits.id = ratings.outfit_id
                        ORDER BY outfits.id
                        """
                    )
                    results = []
                    results_dict = {}
                    for record in db.fetchall():
                        if record[0] not in results_dict:
                            results_dict[record[0]] = OutfitOut(
                            id = record[0],
                            img_url = record[1],
                            style = record[2],
                            occasion = record[3],
                            account_id = record[4],
                            ratings = [],
                            avg_rating = record[5]
                            )
                            if record[6] is not None:
                                results_dict[record[0]].ratings.append(RatingOut(
                                    id = record[6],
                                    category_1 = record[7],
                                    category_2 = record[8],
                                    category_3 = record[9],
                                    account_id = record[10],
                                    outfit_id = record[11]
                                ))
                        else:
                            if record[6] is not None:
                                results_dict[record[0]].ratings.append(RatingOut(
                                    id = record[5],
                                    category_1 = record[7],
                                    category_2 = record[8],
                                    category_3 = record[9],
                                    account_id = record[10],
                                    outfit_id = record[11]
                                ))

                    for value in results_dict.values():
                        results.append(value)
                    return {"outfits": results}
        except Exception as e:
            print(e)
        return {"message" : "could not get all outfits"}

    def create_outfit(
            self,
            outfit: OutfitIn,
            account_id: int
            ) -> OutfitOut: #queries: OutfitQueries = Depends()
            ### query thing here with id from acc_id if needed
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO outfits
                        (img_url, style, occasion, account_id)
                    VALUES
                        (%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [outfit.img_url, outfit.style, outfit.occasion, account_id]
                )
                id = result.fetchone()[0]
                old_data = outfit.dict()
                return {"id":id, "ratings": [], **old_data, "account_id":account_id}####FixToIncludeRatings
    # raise HTTPException(
    #         status_code=status.HTTP_401_UNAUTHORIZED,
    #         detail="User is not currently logged in",
    #     )

    def delete_outfit(
            self,
            outfit_id,
            curr_account_id
    ):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT account_id FROM outfits
                        WHERE id = %s
                        """,
                        [outfit_id]
                    )
                    account_id = db.fetchone()[0]
        except Exception as e:
            print(e)
            return False
        if curr_account_id == account_id:
            try:
                with pool.connection() as conn:
                    with conn.cursor() as db:
                        db.execute(
                            """
                            DELETE FROM outfits
                            WHERE id = %s
                            """,
                            [outfit_id]
                        )
                        return True
            except Exception as e:
                print(e)
                return False
        return False
