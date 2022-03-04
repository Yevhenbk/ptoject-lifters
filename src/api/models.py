import os
import sys
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from sqlalchemy.dialects.postgresql import VARCHAR
from sqlalchemy import Column, ForeignKey, Integer, Table, Numeric, Enum, Time, TIMESTAMP


db = SQLAlchemy()

class Account(db.Model):
    __tablename__="account"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR, unique=False, nullable=False)
    lastname = db.Column(db.VARCHAR, unique=False, nullable=False)
    email = db.Column(db.VARCHAR, unique=True, nullable=False)
    password = db.Column(db.VARCHAR, unique=False, nullable=False)
    is_theAdmin = db.Column(db.Boolean(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    have_federated = relationship("Federated", backref="account")
    have_admin = relationship("TheAdmin", backref="account")

    def __repr__(self):
        return f'Account {self.id}'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name, 
            "lastname":self.lastname, 
            "email": self.email,
            "is_theAdmin": self.is_theAdmin
        }

    @classmethod
    def get_by_id(cls, id):
        account = cls.query.get(id)
        return account

    @classmethod
    def get_all(cls):
        account = cls.query.all()
        return account

    @classmethod
    def get_by_email(cls, email):
        account = cls.query.filter_by(email=email).one_or_none()
        return account

    def create(self):
        db.session.add(self)
        db.session.commit()



class Federated(db.Model):
    __tablename__="federated"
    id = db.Column(db.Integer, primary_key=True)
    id_account = db.Column(db.Integer, ForeignKey("account.id"))

    have_account = relationship("Account", backref="federated")


    def __repr__(self):
        return f'Federated {self.id}'
    
    def to_dict(self):
        federated = Account.get_by_id(self.id_account)

        return {
            "id": self.id, 
            "name": federated.name, 
            "lastname":federated.lastname, 
            "email": federated.email,
            "is_theAdmin": federated.is_theAdmin
        }

    @classmethod
    def get_by_id(cls, id):
        federated = cls.query.get(id)
        return federated

    @classmethod
    def get_all(cls):
        federated = cls.query.all()
        return federated

    @classmethod
    def get_by_id_account(cls, id):
        federated = cls.query.filter_by(id_account = id).one_or_none()
        return federated

    def create(self):
        db.session.add(self)
        db.session.commit()



class TheAdmin(db.Model):
    __tablename__="theAdmin"
    id = db.Column(db.Integer, primary_key=True)
    id_account = db.Column(db.Integer, ForeignKey("account.id"))

    have_account = relationship("Account", backref="theAdmin")
    have_classes = relationship("Classes", backref="theAdmin")
    have_blog = relationship("Blog", backref="theAdmin")
    have_products = relationship("Products", backref="theAdmin")
    have_competition_team = relationship("CompetitionTeam", backref="theAdmin")


    def __repr__(self):
        return f'TheAdmin {self.id}'
    
    def to_dict(self):
        theAdmin = Account.get_by_id(self.id_account)

        return {
            "id": self.id,
            "name": theAdmin.name, 
            "lastname":theAdmin.lastname, 
            "email": theAdmin.email,
            "is_theAdmin": theAdmin.is_theAdmin 
        }

    @classmethod
    def get_by_id(cls, id):
        theAdmin = cls.query.get(id)
        return theAdmin

    @classmethod
    def get_all(cls):
        theAdmin = cls.query.all()
        return theAdmin

    @classmethod
    def get_by_id_account(cls, id):
        theAdmin = cls.query.filter_by(id_account = id).one_or_none()
        return theAdmin

    def create(self):
        db.session.add(self)
        db.session.commit()


class Classes(db.Model):
    __tablename__="classes"
    id = db.Column(db.Integer, primary_key=True)
    start_hour = db.Column(db.Time(timezone=False), nullable=False)
    end_hour = db.Column(db.Time(timezone=False), nullable=False)
    monday = db.Column(db.Boolean(), nullable=True)
    tuesday = db.Column(db.Boolean(), nullable=True)
    wednesday = db.Column(db.Boolean(), nullable=True)
    thursday = db.Column(db.Boolean(), nullable=True)
    friday = db.Column(db.Boolean(), nullable=True)
    admin_id = Column(Integer, ForeignKey('theAdmin.id'))


    def __repr__(self):
        return f'Classes {self.id}'
    
    def to_dict(self):
        return {
            "start_hour": self.start_hour,
            "end_hour": self.end_hour,
            "monday": self.monday,
            "tuesday": self.tuesday,
            "wednesday": self.wednesday,
            "thursday": self.thursday,
            "friday": self.friday
        }

    @classmethod
    def get_all(cls):
        print("get all")
        classes = cls.query.all()
        return classes
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self


class Blog(db.Model):
    __tablename__="blog"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.VARCHAR, unique=False, nullable=False)
    img = db.Column(db.VARCHAR, unique=False, default=False, nullable=True) 
    description = db.Column(db.VARCHAR, unique=False, nullable=True)
    availability = db.Column(db.Boolean(), nullable=False) 
    admin_id = db.Column(Integer, ForeignKey('theAdmin.id'))


    def __repr__(self):
        return f'Blog {self.id}'
    
    def to_dict(self):
        return {
            "id": self.id, 
            "title": self.title,
            "img": self.img,
            "description": self.description,
            "availability": self.availability,
            "admin_id": self.admin_id
        }

    @classmethod
    def get_by_id(cls, id):
        blog = cls.query.get(id)
        return blog
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
    


class Products(db.Model):
    __tablename__="products"
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.VARCHAR, unique=False, nullable=False)
    img = db.Column(db.VARCHAR, unique=False, default=False, nullable=False)
    availability = db.Column(db.Boolean(), nullable=False)
    admin_id = db.Column(db.Integer, ForeignKey('theAdmin.id')) 


    def __repr__(self):
        return f'Products {self.id}'
    
    def to_dict(self):
        return {
            "id": self.id, 
            "product_name": self.product_name,
            "img": self.img,
            "availability": self.availability,
            "admin_id": self.admin_id
        }
    
    @classmethod
    def get_by_id(cls, id):
        products = cls.query.get(id)
        return products
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self



class CompetitionTeam(db.Model):
    __tablename__="competitionTeam"
    id = db.Column(db.Integer, primary_key=True)
    athlete_name = db.Column(db.VARCHAR, unique=False, nullable=False)
    img = db.Column(db.VARCHAR, unique=False, default=False, nullable=False)
    snatch = db.Column(db.Integer, unique=False, nullable=False)
    cj = db.Column(db.Integer, unique=False, nullable=False)
    total = db.Column(db.Integer, unique=False, nullable=False)
    admin_id = db.Column(db.Integer, ForeignKey('theAdmin.id'))


    def __repr__(self):
        return f'CompetitionTeam {self.id}'
    
    def to_dict(self):
        return {
            "id": self.id, 
            "athlete_name": self.athlete_name,
            "img": self.img,
            "snatch": self.snatch,
            "cj": self.cj,
            "admin_id": self.admin_id
        }
    
    @classmethod
    def get_by_id(cls, id):
        competiotionTeam = cls.query.get(id)
        return competiotionTeam

    @classmethod
    def get_all(cls):
        competiotionTeam = cls.query.all()
        return competiotionTeam
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self