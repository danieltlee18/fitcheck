from pydantic import BaseModel
from fastapi import FastAPI, HTTPException, status
from fastapi.testclient import TestClient
from main import app
from queries.authenticator import authenticator
from queries.outfits import OutfitRepo

client = TestClient(app)

class UserOut(BaseModel):
    id: int
    username: str
    email: str


def fake_get_current_account_data():
    return UserOut(id=1, username="TomHolland", email="spider@man.com")

def fake_failed_get_current_account_data():
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED
    )

def test_get_account():
    # Arrange
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    # Act
    response = client.get("/token")

    # Clean up
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    assert response.json() == UserOut(id=1, username="TomHolland", email="spider@man.com")

def test_invalid_get_account():
    app.dependency_overrides[authenticator.get_current_account_data] = fake_failed_get_current_account_data

    response = client.get("/token")

    app.dependency_overrides = {}

    assert response.status_code == 401
output = {
        "outfits": [{
            "img_url": "test_url",
            "style": "beach",
            "occasion": "str | None",
            "id": 1,
            "account_id": 2,
            "ratings": [
                {
                    "id": 5 ,
                    "category_1": 5,
                    "category_2": 3,
                    "category_3": 2,
                    "outfit_id": 8,
                    "account_id": 11
                },
                {
                    "id": 2 ,
                    "category_1": 2,
                    "category_2": 5,
                    "category_3": 3,
                    "outfit_id": 8,
                    "account_id": 13
                },
                ],
                "avg_rating": 2.3,
            },
            {
            "img_url": "test_url",
            "style": "beach",
            "occasion": "str | None",
            "id": 2,
            "account_id": 4,
            "ratings": [
                {
                    "id": 6 ,
                    "category_1": 5,
                    "category_2": 3,
                    "category_3": 2,
                    "outfit_id": 8,
                    "account_id": 16
                },
                {
                    "id": 88 ,
                    "category_1": 2,
                    "category_2": 5,
                    "category_3": 3,
                    "outfit_id": 8,
                    "account_id": 19
                },
                ],
                "avg_rating": 2.4,
            }]
    }
class fake_outfit_repo:
    def list_outfits(self):
        return output
    def create_outfit(self):
        pass

def test_list_outfits():
    app.dependency_overrides[OutfitRepo] = fake_outfit_repo
    response = client.get("/api/outfits")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == output
