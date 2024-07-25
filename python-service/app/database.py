from sqlalchemy import create_engine
import os
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL_LOCAL = "postgresql://postgres:1234567@localhost:5432/fastapi_db"
DATABASE_URL = os.environ.get("DATABASE_URL", DATABASE_URL_LOCAL)
print("database.....",DATABASE_URL)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
