steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE outfits (
            id SERIAL PRIMARY KEY NOT NULL,
            img_url VARCHAR(1000) NOT NULL,
            style VARCHAR(200) NOT NULL,
            occasion VARCHAR(500),
            account_id INT NOT NULL UNIQUE,
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
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            hashed_password VARCHAR(500) NOT NULL,
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE outfits;
        """
    ]
]
