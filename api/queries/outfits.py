from pydantic import BaseModel
from typing import List

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
    # ratings: List[RatingOut]

class AllOutfits(BaseModel):
    outfits : List[OutfitOut]
