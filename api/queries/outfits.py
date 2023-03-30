from pydantic import BaseModel
from typing import List
from routers.pool import pool

class OutfitIn(BaseModel):
    img_url: str
    style: str ##literal?
    occasion: str | None
    account_id: int

class OutfitOut(BaseModel):
    img_url: str
    style: str
    occasion: str | None
    id: int
    # ratings: List[RatingOut]

class AllOutfits(BaseModel):
    outfits : List[OutfitOut]


class OutfitRepo:
    def create_outfit(outfit: OutfitIn) -> OutfitOut: #queries: OutfitQueries = Depends()
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
                    [outfit.img_url, outfit.style, outfit.occasion]
                )
                id = result.fetchone()[0]
                old_data = outfit.dict()
                return {"id":id, "ratings": [], **old_data}
