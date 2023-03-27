from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel
from .ratings import RatingOut


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
    ratings: list[RatingOut]

@router.get("/api/outfits", response_model = OutfitOut)
def list_outfits(): #queries: OutfitQueries = Depends()
    return {
        "img_url" : "hi",
        "style" : "beach",
        "occasion":None,
        "id": 4,
        "ratings": [ {
                "outfit_id": 4,
                "category_1": 2,
                "category_2": 5,
                "category_3": 4
            }
        ],
        }
