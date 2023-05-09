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
    def get(self, username: str) -> AccountOutWithPassword:
        print("Username if crash:", username)
        with pool.connection() as conn:
            with conn.cursor() as curs:
                curs.execute(
                    """
                    SELECT id, email, username, hashed_password
                    FROM accounts
                    WHERE username = %s;
                    """,
                    [username],
                )
                u_name = curs.fetchone()
                if u_name is None:
                    return None

                out_user = AccountOutWithPassword(
                    id=u_name[0],
                    email=u_name[1],
                    username=u_name[2],
                    hashed_password=u_name[3],
                )
                return out_user

    def create(
        self, info: AccountIn, hashed_password: str
    ) -> AccountOutWithPassword:
        info.username = info.username.lower()
        account = info.dict()
        del account["password"]
        account["hashed_password"] = hashed_password
        with pool.connection() as conn:
            with conn.cursor() as curs:
                curs.execute(
                    """
                    SELECT username, email
                    FROM accounts
                    WHERE (username = %s or email = %s)
                    """,
                    [account["username"], account["email"]],
                )
                if curs.fetchone() is not None:
                    raise DuplicateAccountError

                output = curs.execute(
                    """
                    INSERT INTO accounts (username, email, hashed_password)
                    VALUES (%s, %s, %s)
                    RETURNING id
                    """,
                    [
                        account["username"],
                        account["email"],
                        account["hashed_password"],
                    ],
                )
                account["id"] = output.fetchone()[0]
                curs.close()
        return AccountOutWithPassword(**account)
