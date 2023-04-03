from pydantic import BaseModel
from queries.ratings import RatingIn, RatingOut, RatingRepo
from fastapi import Depends, APIRouter, HTTPException
from queries.authenticator import authenticator
router = APIRouter()


@router.post("/api/outfits/{outfit_id}/ratings", response_model=RatingOut)
def create_rating(
    outfit_id: int,
    rating: RatingIn,
    repo: RatingRepo = Depends(),
    curr_account: dict=Depends(authenticator.get_current_account_data)
    ) -> RatingOut:

    repo.check_rating_by_outfit_id_and_account_id(outfit_id, curr_account["id"] )
    new_rating = repo.create_rating(rating, curr_account["id"], outfit_id)
    return new_rating
