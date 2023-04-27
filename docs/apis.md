# APIs

## Outfit

- **Method**: `POST`, `GET`, `DELETE`,
- **Path**: `/api/outfits`, `/api/outfits/{outfit_id}`

Input:

```json
{
  "img_url": string,
  "style": string,
  "occasion": string,
}
```

Output:

```json
{
  "img_url": string,
  "style": string,
  "occasion": string,
  "id": int,
  "account_id": int,
  "ratings": [
    {
      "id": int,
      "category_1": float,
      "category_2": float,
      "category_3": float,
      "outfit_id": int,
      "account_id": int
    }
  ],
  "avg_rating": float,

}
```

Creating a new outfit saves the id, img_url, style, occasion, avg_rating, and account_id. This adds a new existing Outfit to the database which can be rated and displayed in the user's outfits and on the dashboard.

## Rating

- **Method**: `POST`,
- **Path**: `/api/outfits/{outfit_id}/ratings`,

Input:

```json
{
  "category_1": float,
  "category_2": float,
  "category_3": float,
}
```

Output:

```json
{
  "id": int,
  "category_1": float,
  "category_2": float,
  "category_3": float,
  "outfit_id": int,
  "account_id": int,
}
```

Creating a new rating saves the id, category_1, category_2, category_3, outfit_id, and account_id. This adds a new existing Rating to the database which is added to an existing outfit.

## Accounts

- Method: `GET`, `POST`
- Path: `/token`, `/api/accounts`

Input:

```json
{
  "email": string,
  "password": string,
  "username": string,
}
```

Output:

```json
{
  "id": int,
  "email": string,
  "username": string,
}
```

The Accounts API will create an account for a user on the FitCheck website. Users will need to enter in all of the information listed, as well as a field for confirming the password, to create an account.
