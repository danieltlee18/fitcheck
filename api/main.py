from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import outfits
from queries.authenticator import authenticator
from queries.accounts import AccountOut, AccountQueries
from routers.accounts import HttpError
from routers import accounts, ratings


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        'http://localhost:3000',
        os.environ.get("CORS_HOST", None),
        'https://fitcheck.one',
        'https://lads51.gitlab.io',
        'https://www.fitcheck.one',
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["pragma"],
)


@app.get("/", tags=["Landing Page"])
async def root():
    return {"message": "Hello World"}


@app.get("/token", response_model=AccountOut | HttpError)
async def get_account(
        repo: AccountQueries = Depends(),
        curr_account: dict = Depends(authenticator.get_current_account_data),
) -> AccountOut:
    response = AccountOut.from_orm(curr_account)
    access_token = authenticator.create_access_token(curr_account)
    response.headers["Set-Cookie"] = (
        f"access_token={access_token}; HttpOnly; Secure; SameSite=None"
    )
    return response


app.include_router(outfits.router, tags=["Outfits"])
app.include_router(authenticator.router, tags=["Authentication"])
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(ratings.router, tags=["Ratings"])
