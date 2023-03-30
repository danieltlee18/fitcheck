from fastapi import APIRouter, Depends, Response, HTTPException, status
from pydantic import BaseModel
from .ratings import RatingOut
from typing import List, Optional
from .pool import pool
from queries.outfits import OutfitIn, OutfitOut, AllOutfits
from queries.authenticator import authenticator

router = APIRouter()

@router.get("/api/outfits", response_model = AllOutfits)
def list_outfits(outfit = Depends(authenticator.get_current_account_data)) -> AllOutfits: #queries: OutfitQueries = Depends()
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
                    outfit = OutfitOut(
                        id = record[0],
                        img_url = record[1],
                        style = record[2],
                        occasion = record[3]
                    )
                    results.append(outfit)
                return {"outfits":results}
    except Exception as e:
        print(e)
    return {"message" : "could not get all outfits"}

@router.post("/api/outfits", response_model = OutfitOut)
def create_outfit(outfit: OutfitIn, curr_account: Optional[dict]=Depends(authenticator.try_get_current_account_data)) -> OutfitOut: #queries: OutfitQueries = Depends()
    if curr_account:
        account_id = curr_account["id"]

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
    raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User is not currently logged in",
        )
