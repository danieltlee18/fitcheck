from pydantic import BaseModel
from fastapi import FastAPI, HTTPException, status
from fastapi.testclient import TestClient
from main import app
from queries.authenticator import authenticator


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
