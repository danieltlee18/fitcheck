# Data models

## Accounts microservice

---

### Accounts

| name            | type    | unique | optional |
| --------------- | ------- | ------ | -------- |
| id              | int     | yes    | no       |
| username        | varchar | yes    | no       |
| email           | string  | yes    | no       |
| hashed_password | string  | no     | no       |

The `account` entity contains the data about a specific user's account

## Outfits microservice

---

### Outfit

| name       | type    | unique | optional |
| ---------- | ------- | ------ | -------- |
| id         | int     | yes    | no       |
| img_url    | varchar | no     | no       |
| style      | varchar | no     | no       |
| occasion   | varchar | no     | no       |
| avg_rating | float   | no     | no       |
| account_id | int     | no     | no       |
| occasion   | varchar | no     | yes      |

The `outfit` entity contains the data about a specific user's uploaded outfit as well as the ratings associated with the outfit

### Ratings

| name       | type    | unique | optional |
| ---------- | ------- | ------ | -------- |
| id         | int     | yes    | no       |
| category_1 | float   | no     | no       |
| category_2 | float   | no     | no       |
| category_3 | float   | no     | no       |
| outfit_id  | int     | no     | no       |
| account_id | int     | no     | no       |
| occasion   | varchar | no     | no       |

The `rating` entity contains the data about a specific outfit's rating and associates that rating with the rater and the outfit rated
