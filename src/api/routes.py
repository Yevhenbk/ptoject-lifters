from datetime import timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from sqlalchemy import exc
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename
from werkzeug.datastructures import ImmutableMultiDict
from api.models import db, Account, Federated, TheAdmin, Classes, Products, Blog, CompetitionTeam
from api.utils import generate_sitemap, APIException
import cloudinary
import cloudinary.uploader
import cloudinary.api
import os

api = Blueprint('api', __name__)
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get(
        'email', None
    )
    password = request.json.get(
        'password', None
    )
    if not (email and password):
        return ({'error': 'Wrong email or password'}), 400

    user = Account.get_by_email(email)
    print(user)
    if not user: return ({'error': 'usuario no encontrado'}), 400

    
    if user.is_theAdmin:
        theAdmin = TheAdmin.get_by_id_account(user.id)
        print(user.name)
        print(user.is_theAdmin)
        print(user.password)
        print(user.is_active)
        print(check_password_hash(user.password, password))
        if theAdmin and user.is_active and check_password_hash(user.password, password):
            token = create_access_token(identity=theAdmin.id, expires_delta=timedelta(minutes=120))
            return {'token': token, 'role': 1, "name":user.name}, 200

    else:
        federated = Federated.get_by_id_account(user.id)

        if federated and user.is_active and check_password_hash(user.password, password):
            token = create_access_token(identity=federated.id, expires_delta=timedelta(minutes=120))
            return {'token': token, 'role': 2, "name":user.name}, 200


@api.route('/accounts', methods=['GET'])
def get_accounts():
    account = Account.get_all()
    
    if account:
        account_dict = [acc.to_dict() for acc in account]
        return jsonify(account_dict), 200


@api.route('/admin', methods=['POST'])
def create_the_admin():
    name = request.json.get('name', None) 
    lastname = request.json.get('lastname', None) 
    email = request.json.get('email', None)
    password = request.json.get('password', None) 
    
    print(name, lastname, email, password)
    if not (name and lastname and password and email):
        return ({'error': 'Some fields are missing'}), 400
     
    account = Account( 
        name=name, 
        lastname=lastname,
        email=email, 
        password=generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
        is_theAdmin=True,
        is_active=True
    )
    print(account)
       
    try:
        account.create()
        
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400
    
    theAdmin = TheAdmin(id_account=account.id)
    try:
        theAdmin.create()
        return jsonify(theAdmin.to_dict()), 201
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400

    if account :
        token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
        return({'token' : token}), 200



@api.route('/federated', methods=['POST'])
def create_federated():
    name = request.json.get('name', None) 
    lastname = request.json.get('lastname', None) 
    email = request.json.get('email', None)
    password = request.json.get('password', None) 
    
    print(name, lastname, email, password)
    if not (name and lastname and password and email):
        return ({'error': 'Some fields are missing'}), 400
     
    account = Account( 
        name=name, 
        lastname=lastname,
        email=email, 
        password=generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
        is_theAdmin=False,
        is_active=True
    )
    print(account)
       
    try:
        account.create()
        
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400
    
    federated = Federated(id_account=account.id)
    try:
        federated.create()
        return jsonify(federated.to_dict()), 201
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400

    if account :
        token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
        return({'token' : token}), 200



@api.route('/admin/classes', methods=['POST'])
def add_new_classes():
    print("llego")
    start_hour = request.json.get(
        'start_hour', None
    )
    end_hour = request.json.get(
        'end_hour', None
    ) 
    monday = request.json.get(
        'monday', None
    ) 
    tuesday = request.json.get(
        'tuesday', None
    ) 
    wednesday = request.json.get(
        'wednesday', None
    )
    thursday = request.json.get(
        'thursday', None
    )
    friday = request.json.get(
        'friday', None
    ) 
    saturday = request.json.get(
        'saturday', None
    )
    sunday = request.json.get(
        'sunday', None
    ) 

    if not (start_hour and end_hour):
        return ({'error': 'Some fields are missing'}), 400
        classes = Classes(
        start_hour=start_hour,
        end_hour=end_hour, 
        monday=monday,
        tuesday=tuesday,
        wednesday=wednesday,
        thursday=thursday,
        friday=friday,
        saturday=saturday,
        sunday=sunday
    )
    print(classes.to_dict())

    try:
        classes_created = classes.create()
        return jsonify(classes_created.to_dict()), 201
        
    except exc.IntegrityError:
        return ({'error': 'Unexpected error'}), 400


@api.route('/clases', methods=['GET'])
def get_classes():
    classes = Classes.get_all()
    
    if classes:
        classes_dict = [clases.to_dict() for clases in classes]
        return jsonify(classes_dict), 200


@api.route('/admin/products', methods=['POST'])
def add_new_products():
    print("llego")
    product_name = request.json.get(
        'product_name', None
    )
    img = request.json.get(
        'img', None
    ) 
    availability = request.json.get(
        'availability', None
    ) 

    if not (product_name and img and availability):
        return ({'error': 'Some fields are missing'}), 400
        products = Products(
        product_name=product_name,
        img=img, 
        availability=availability
    )
    print(products.to_dict())

    try:
        products_created = products.create()
        return jsonify(products_created.to_dict()), 201
        
    except exc.IntegrityError:
        return ({'error': 'Unexpected error'}), 400


@api.route('/admin/competitors', methods=['POST'])
def add_new_athletes():
    cloudinary.config(
        cloud_name= os.getenv('CLOUD_NAME'),
        api_key= os.getenv('API_KEY'),
        api_secret= os.getenv('API_SECRET')
    )
    athlete_name = request.json.get('athlete_name', None)
    img = ""
    snatch = request.json.get('snatch', None)
    cj = request.json.get('cj', None)
    total = request.json.get('total', None) 
    file_upload = request.files.get('file')
    print(file_upload)
    if file_upload:
        print(file_upload.filename)

        #validar la extension del archivo
        if file_upload.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS:
            print("si")
            upload_result = cloudinary.uploader.upload(file_upload)
            if upload_result:
                img = upload_result.get('secure_url')
                file_name = file_upload.filename

            competiotionTeam = CompetitionTeam( athlete_name=athlete_name, img=img, snatch=snatch, cj=cj, total=total)
            
            try:
                competitionTeam_created = competitionTeam.create()
                return jsonify(competitionTeam_created.to_dict()), 201
            
            except exc.IntegrityError:
                return ({'error': 'Unexpected error'}), 400


@api.route('/competitors', methods=['GET'])
def get_competitors():
    competitionTeam = CompetitionTeam.get_all()
    
    if competitionTeam:
        competitionTeam_dict = [competitors.to_dict() for competitors in competitionTeam]
        return jsonify(competitionTeam_dict), 200


@api.route('/admin/blog', methods=['POST'])
def add_new_post():
    print("llego")
    title = request.json.get('title', None)
    img = request.json.get('img', None) 
    description = request.json.get('description', None)
    availability = request.json.get('availability', None) 

    if not (title and img and description and availability):
        return ({'error': 'Some fields are missing'}), 400
        blog = Blog(
        title=title,
        img=img, 
        description=description,
        availability=availability
    )
    print(blog.to_dict())

    try:
        post_created = blog.create()
        return jsonify(post_created.to_dict()), 201
        
    except exc.IntegrityError:
        return ({'error': 'Unexpected error'}), 400