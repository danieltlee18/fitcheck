# authenticator.py
# from fastapi import Depends
from pydantic import BaseModel
from routers.pool import pool


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
    # COLLECTION = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        # result = self.collection.find_one({"username": username.lower()})
        # if result is None:
        #     return None
        # result["id"] = str(result["_id"])
        # return AccountOutWithPassword(**result)
        pass

    def create(self, info: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        info.username = info.username.lower()
        account = info.dict()
        del account["password"]
        account["hashed_password"] = hashed_password
        with pool.connection() as conn:
            with conn.cursor() as curs:
                curs.execute(
                    """
                    SELECT username
                    FROM accounts
                    WHERE username = %s
                    """,
                    [account["username"]]
                )
                if curs.fetchone() is not None:
                    raise DuplicateAccountError

                output = curs.execute(
                    """
                    INSERT INTO accounts (username, email, hashed_password)
                    VALUES (%s, %s, %s)
                    RETURNING id
                    """,
                    [account["username"], account["email"], account["hashed_password"]]
                )
                account["id"] = output.fetchone()[0]
                print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", output.fetchall())
        return AccountOutWithPassword(**account)
