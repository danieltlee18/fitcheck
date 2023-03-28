from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import outfits
from queries.authenticator import authenticator
from routers import accounts

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

app.include_router(outfits.router)
app.include_router(authenticator.router)
app.include_router(accounts.router)
