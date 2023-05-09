from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# import os
from routers import outfits
from queries.authenticator import authenticator
from routers import accounts, ratings

app = FastAPI()

origins = [
        'http://localhost:3000',
        'https://fitcheck.one',
        'https://lads51.gitlab.io',
        'https://www.fitcheck.one',
        "https://lads51.gitlab.io/module3-project-gamma",
        "https://fitcheck-api.dec-ct-3.mod3projects.com"

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["Authorization", "Content-Type", "Origin", "User-Agent"],
    expose_headers=["pragma"],
    max_age=315576000
)


@app.get("/", tags=["Landing Page"])
async def root():
    headers = {
        "Access-Control-Allow-Origin": origins,
    }
    return headers


app.include_router(outfits.router, tags=["Outfits"])
app.include_router(authenticator.router, tags=["Authentication"])
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(ratings.router, tags=["Ratings"])
