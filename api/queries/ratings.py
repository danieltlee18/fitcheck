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
    async def create_rating(
            self,
            rating: RatingIn,
            curr_account: Optional[dict]=Depends(authenticator.try_get_current_account_data)
            ) -> RatingOut: #queries: OutfitQueries = Depends()
        print("AAAAAAAAAAAAAAAAAAAAAAAAAAA", type(curr_account))
        print("BBBBBBBBBBBBBBBBBBBBBBBBBB", curr_account)
        print(type(rating))
        print(rating)
        if curr_account:
            account_id = curr_account.id
            with pool.connection() as conn:
                with conn.cursor() as db:
                    no_duplicates = db.execute(
                    """
                    SELECT outfit_id, account_id
                    FROM ratings
                    WHERE (outfit_id = %s and account_id = %s)
                    """,
                    [rating["outfit_id"], account_id]
                    )
                    print("-----------3-------------")
                    if no_duplicates:
                        raise HTTPException(
                            status_code=status.HTTP_400_BAD_REQUEST,
                            detail="You have already rated that outfit",
                        )
                    print("--2--------------")

                    result = db.execute(
                        """
                        INSERT INTO ratings
                            (category_1, category_2, category_3, outfit_id, account_id)
                        VALUES
                            (%s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [rating.category_1, rating.category_2, rating.category_3, rating.outfit_id, rating.account_id]
                    )
                    db_rating = result.fetchone()
                    rating_out = RatingOut(
                        id=db_rating[0],
                        category_1=db_rating[0],
                        category_2=db_rating[1],
                        category_3=db_rating[2],
                        outfit_id=db_rating[4],
                        account_id=db_rating[5]
                        )

                    return rating_out
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User is not currently logged in",
        )
