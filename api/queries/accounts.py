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
    COLLECTION = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        result = self.collection.find_one({"username": username.lower()})
        if result is None:
            return None
        result["id"] = str(result["_id"])
        return AccountOutWithPassword(**result)

    def create(self, info: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        info.username = info.username.lower()
        account = info.dict()
        del account["password"]
        account["hashed_password"] = hashed_password
        if self.get(account["username"]) is not None:
            raise DuplicateAccountError
        self.collection.insert_one(account)
        account["id"] = str(account["_id"])
        return AccountOutWithPassword(**account)
