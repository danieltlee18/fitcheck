from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from queries.authenticator import authenticator
from pydantic import BaseModel
from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountQueries,
    DuplicateAccountError,
)


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountOut | HttpError)
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
