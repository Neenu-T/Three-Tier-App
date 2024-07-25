from sqlalchemy.orm import Session
from . import models, schemas

def get_elements(db: Session):
    return db.query(models.Element).all()

def add_element(db: Session, element: schemas.Element):
    db_element = models.Element(name=element.name)
    db.add(db_element)
    db.commit()
    db.refresh(db_element)
    return db_element
