from fastapi import APIRouter, Depends, Response, HTTPException, status
from pydantic import BaseModel
from .ratings import RatingOut
from typing import List, Optional
from .pool import pool
from queries.outfits import OutfitIn, OutfitOut, AllOutfits, OutfitRepo
from queries.authenticator import authenticator

router = APIRouter()



@router.post("/api/outfits", response_model = OutfitOut)
def create_outfit(
    outfit: OutfitIn,
    repo: OutfitRepo = Depends(OutfitRepo),
    curr_account: dict=Depends(authenticator.get_current_account_data)
    ) -> OutfitOut:
    new_outfit = repo.create_outfit(outfit, curr_account["id"])
    return new_outfit

@router.get("/api/outfits", response_model = AllOutfits)
def list_outfits(
    repo: OutfitRepo = Depends(OutfitRepo),
) -> AllOutfits:
    outfits = repo.list_outfits()
    return outfits


@router.delete("/api/outfits/{outfit_id}", response_model=bool)
def delete_outfit(
    outfit_id: int,
    repo: OutfitRepo = Depends(),
    curr_account: dict=Depends(authenticator.get_current_account_data)
) -> bool:
    curr_account_id = curr_account["id"]
    return repo.delete_outfit(outfit_id, curr_account_id)
