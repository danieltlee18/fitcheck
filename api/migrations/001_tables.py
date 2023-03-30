steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            hashed_password VARCHAR(500) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE outfits (
            id SERIAL PRIMARY KEY NOT NULL,
            img_url VARCHAR(1000) NOT NULL,
            style VARCHAR(200) NOT NULL,
            occasion VARCHAR(500),
            account_id int,
            FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE outfits;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE ratings (
            id SERIAL PRIMARY KEY NOT NULL,
            category_1 DECIMAL(2,1) NOT NULL CHECK (category_1 >= 0 AND category_1 <= 5 AND category_1 % 0.5 = 0),
            category_2 DECIMAL(2,1) NOT NULL CHECK (category_2 >= 0 AND category_2 <= 5 AND category_2 % 0.5 = 0),
            category_3 DECIMAL(2,1) NOT NULL CHECK (category_3 >= 0 AND category_3 <= 5 AND category_3 % 0.5 = 0),
            outfit_id int,
            FOREIGN KEY (outfit_id) REFERENCES outfits(id) ON DELETE CASCADE,
            account_id int,
            FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE ratings;
        """
    ]

]
