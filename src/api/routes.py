from flask import Flask, request, jsonify, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity  

api = Blueprint('api', __name__)

# Permitimos solicitudes CORS a esta API
CORS(api)

# Endpoint para saludar
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

# Endpoint para registrar un nuevo usuario
@api.route('/signup', methods=['POST'])
def signup():
    response_body = {}
    data = request.json
    user = User(
        email=data.get('email'),
        password=data.get('password'),
        is_active=True,
    )
    user_exist = db.session.execute(db.select(User).where(User.email == user.email)).scalar()
    if user_exist:
        return jsonify({"message": "Usuario existente"}), 401
    db.session.add(user)
    db.session.commit()
    response_body['results'] = user.serialize()
    response_body['message'] = "Usuario creado"
    access_token = create_access_token(identity=[user.email, True])
    response_body['access_token'] = access_token
    return jsonify(response_body), 200

# Endpoint para iniciar sesión
@api.route('/login', methods=["POST"])
def login():
    response_body = {}
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = db.session.execute(db.select(User).where(User.email == email, User.password == password)).scalar()
    if not user:
        return jsonify({"message": "Bad email or password"}), 400
    access_token = create_access_token(identity=[email, True])
    return jsonify(access_token=access_token)

# Endpoint para acceder a recursos privados
@api.route('/private', methods=["GET"])
@jwt_required()  # Decoramos la función con jwt_required para requerir autenticación
def private():
    current_user = get_jwt_identity()  # Obtenemos la identidad del usuario autenticado
    return jsonify(logged_in_as=current_user), 200

# Endpoint para obtener el perfil del usuario
@api.route('/profile', methods=["GET"])
 # Decoramos la función con jwt_required para requerir autenticación
@jwt_required() 
def profile():
    current_user = get_jwt_identity()  # Obtenemos la identidad del usuario autenticado
    if not current_user:
        return jsonify({"message": "Access denied"}), 401
    response_body = {}
    response_body["message"] = "Perfil del usuario"
    response_body["results"] = current_user
    return jsonify(response_body), 200
