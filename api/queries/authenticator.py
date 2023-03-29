import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountQueries, AccountOut, AccountOutWithPassword
from routers.pool import pool

class AuthenticateUser(Authenticator):



    async def get_account_data(
        self,
        username: str,
        accounts: AccountQueries,
    ):
        # Use your repo to get the account based on the
        # username
        print("THIS IS NOT ACCOUNTS1:", accounts)
        return accounts.get(username)


    def get_account_getter(

        accounts: AccountQueries = Depends(),
    ):
        # Return the accounts. That's it.
        print("THIS IS NOT ACCOUNT2:", accounts)
        account = AccountQueries()

        return account

    def get_hashed_password(self, account: AccountOutWithPassword):
        # Return the encrypted password value from your
        # account object
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOut):
        # Return the username and the data for the cookie.
        # You must return TWO values from this method.
        return account.username, AccountOut(**account.dict())


authenticator = AuthenticateUser(os.environ["SIGNING_KEY"])
