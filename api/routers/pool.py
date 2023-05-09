import os
from psycopg_pool import ConnectionPool

pool = ConnectionPool(conninfo="postgresql://postgres:f1c8faf839fccf67@srv-captain--fitcheck-db:5432/postgres")
