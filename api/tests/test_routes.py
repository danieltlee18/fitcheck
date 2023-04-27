from fastapi import HTTPException, status
from fastapi.testclient import TestClient
from main import app
from queries.authenticator import authenticator
from queries.outfits import OutfitRepo
from queries.accounts import AccountOut
from queries.ratings import RatingRepo

client = TestClient(app)


def fake_get_current_account_data():
    return AccountOut(
        id=1, username="TomHolland", email="spider@man.com"
    ).dict()


def fake_failed_get_current_account_data():
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)


def test_get_account():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    response = client.get("/token")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == AccountOut(
        id=1, username="TomHolland", email="spider@man.com"
    )


def test_invalid_get_account():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_failed_get_current_account_data

    response = client.get("/token")

    app.dependency_overrides = {}

    assert response.status_code == 401


output = {
    "outfits": [
        {
            "img_url": "test_url",
            "style": "beach",
            "occasion": "str | None",
            "id": 1,
            "account_id": 2,
            "ratings": [
                {
                    "id": 5,
                    "category_1": 5,
                    "category_2": 3,
                    "category_3": 2,
                    "outfit_id": 8,
                    "account_id": 11,
                },
                {
                    "id": 2,
                    "category_1": 2,
                    "category_2": 5,
                    "category_3": 3,
                    "outfit_id": 8,
                    "account_id": 13,
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
                    "id": 6,
                    "category_1": 5,
                    "category_2": 3,
                    "category_3": 2,
                    "outfit_id": 8,
                    "account_id": 16,
                },
                {
                    "id": 88,
                    "category_1": 2,
                    "category_2": 5,
                    "category_3": 3,
                    "outfit_id": 8,
                    "account_id": 19,
                },
            ],
            "avg_rating": 2.4,
        },
    ]
}

example_outfit_in = {
    "img_url": "test_url",
    "style": "epic",
    "occasion": "str | None",
}

example_outfit_out = {
    "img_url": "test_url",
    "style": "beach",
    "occasion": "str | None",
    "id": 2,
    "account_id": 4,
    "ratings": [],
    "avg_rating": 0,
}


class fake_outfit_repo:
    def list_outfits(self):
        return output

    def create_outfit(self, Outfit, account_id):
        return example_outfit_out


def test_list_outfits():
    app.dependency_overrides[OutfitRepo] = fake_outfit_repo
    response = client.get("/api/outfits")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == output


def test_create_outfit():
    app.dependency_overrides[OutfitRepo] = fake_outfit_repo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    response = client.post("/api/outfits", json=example_outfit_in)
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == example_outfit_out


test_rating_in = {"category_1": 2, "category_2": 3, "category_3": 4}
test_rating_out = {
    "id": 1,
    "category_1": 2,
    "category_2": 3,
    "category_3": 4,
    "outfit_id": 5,
    "account_id": 1,
}


class test_rating_repo:
    def create_rating(s, a, b, c):
        return test_rating_out

    def check_rating_by_outfit_id_and_account_id(self, outfit_id, account_id):
        pass


def test_create_rating():
    app.dependency_overrides[RatingRepo] = test_rating_repo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    response = client.post("/api/outfits/5/ratings", json=test_rating_in)

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == test_rating_out
