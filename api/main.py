from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import outfits
from queries.authenticator import authenticator
from routers import accounts, ratings

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        'http://localhost:3000',
        os.environ.get("CORS_HOST", None),
        'https://fitcheck.one',
        'https://lads51.gitlab.io'
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Landing Page"])
async def root():
    return {"message": "Hello World"}

app.include_router(outfits.router, tags=["Outfits"])
app.include_router(authenticator.router, tags=["Authentication"])
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(ratings.router, tags=["Ratings"])
