from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel
from .ratings import RatingOut
from typing import List
from .pool import pool


router = APIRouter()

class OutfitIn(BaseModel):
    img_url: str
    style: str ##literal?
    occasion: str | None
    ## tie to userid somehow




class OutfitOut(BaseModel):
    img_url: str
    style: str
    occasion: str | None
    id: int
    # ratings: list[RatingOut]

class AllOutfits(BaseModel):
    outfits : List[OutfitOut]

@router.get("/api/outfits", response_model = AllOutfits)
def list_outfits() -> AllOutfits: #queries: OutfitQueries = Depends()
    try:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, img_url, style, occasion
                    FROM outfits
                    ORDER BY id
                    """
                )
                results = []
                for record in db.fetchall():
                    print("CCCCCCCCCCCCCCCC: ", record)
                    print(record[0], record[1], record[2], record[3])
                    outfit = {
                        "id" : record[0],
                        "img_url" : record[1],
                        "style" : record[2],
                        "occasion" : record[3]
                    }
                    results.append(outfit)
                print("BBBBBBBBBBBBBBBBBBBBBB: ", results)
                return {"outfits":results}
    except Exception as e:
        print(e)
    return {"message" : "could not get all vacations"}

@router.post("/api/outfits", response_model = OutfitOut)
def create_outfit(outfit: OutfitIn) -> OutfitOut: #queries: OutfitQueries = Depends()
    with pool.connection() as conn:
        with conn.cursor() as db:
            result = db.execute(
                """
                INSERT INTO outfits
                    (img_url, style, occasion)
                VALUES
                    (%s, %s, %s)
                RETURNING id;
                """,
                [outfit.img_url, outfit.style, outfit.occasion]
            )
            id = result.fetchone()[0]
            old_data = outfit.dict()
            return {"id":id, "ratings": [], **old_data}
