from pydantic import BaseModel

# from routers import users, trucks



class RatingOut(BaseModel):
    outfit_id: int
    category_1: int
    category_2: int
    category_3: int
