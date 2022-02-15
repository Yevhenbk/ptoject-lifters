import os
from flask_admin import Admin
from .models import db, Account, Federated, TheAdmin, Classes, Products, Blog, CompetitionTeam
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(Account, db.session))
    admin.add_view(ModelView(Federated, db.session))
    admin.add_view(ModelView(TheAdmin, db.session))
    admin.add_view(ModelView(Classes, db.session))
    admin.add_view(ModelView(Products, db.session))
    admin.add_view(ModelView(Blog, db.session))
    admin.add_view(ModelView(CompetitionTeam, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))