from pydantic import BaseModel
from queries.ratings import RatingIn, RatingOut, RatingRepo
from fastapi import Depends, APIRouter

router = APIRouter()


@router.post("/api/outfits/{outfit_id}/ratings", response_model=RatingOut)
def create_rating(
    rating: RatingIn,
    repo: RatingRepo = Depends(),
    ) -> RatingOut:
    return repo.create_rating(rating)
