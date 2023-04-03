from fastapi import Depends, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
from routers.pool import pool
from queries.authenticator import authenticator


class RatingIn(BaseModel):
    category_1: float
    category_2: float
    category_3: float
    outfit_id:  int


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
            account_id: int
            ) -> RatingOut:
        if (
            rating.category_1 % .5 != 0 or rating.category_1 < 0 or rating.category_1 > 5
            or rating.category_2 % .5 != 0 or rating.category_2 < 0 or rating.category_2 > 5
            or rating.category_3 % .5 != 0 or rating.category_3 < 0 or rating.category_3 > 5
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
                    [rating.category_1, rating.category_2, rating.category_3, rating.outfit_id, account_id]
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

                return rating_out

