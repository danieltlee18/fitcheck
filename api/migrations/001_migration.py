steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE outfits (
            id SERIAL PRIMARY KEY NOT NULL,
            img_url VARCHAR(1000) NOT NULL,
            style VARCHAR(200) NOT NULL,
            occasion VARCHAR(500)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE outfits;
        """
    ]
]
