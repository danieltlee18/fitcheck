# authenticator.py
# from fastapi import Depends
from pydantic import BaseModel



class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    email: str
    password: str
    username: str

class AccountOut(BaseModel):
    id: int
    email: str
    username: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str

class AccountQueries:
    def get(self, email: str) -> AccountOutWithPassword:
        pass

    def create(self, info: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        print("-----------", info, hashed_password)
        pass
