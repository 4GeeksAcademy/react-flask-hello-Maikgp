"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User 
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#----ENDPOINT PARA  REGISTRAR UN USUARIO-----

@api.route('/signup', methods=['POST'])
def register_User():

    data = request.get_json()
    print(data);
    name = data["name"]
    email = data["email"]
    password = data["password"]
    
    new_user = User(name =name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    response_body = {
        "user": {
            "id": new_user.id,
            "name": new_user.name,
            "email": new_user.email,
            
        },
        "msg": "El usuario se registró exitosamente"
    }
    return jsonify(response_body), 200 

#---- Log de usuario--

@api.route('/login', methods=['POST'])
def login():
    datos_login = request.json
    email = datos_login.get('email')
    password = datos_login.get('password')

   
    usuario = User.query.filter_by(email=email).first()

    if usuario and usuario.password == password:
        access_token = create_access_token(identity=usuario.id)
        return jsonify({"token": access_token}), 200
    else:
        return jsonify({'mensaje': 'Credenciales inválidas'}), 401



@api.route('/wipeall', methods=['GET'])
def database_wipe():
    try:
        db.reflect()
        db.drop_all()
        db.session.commit()
    except Exception as e:
        return "mec", 500
    return "This is ok MotherF*%&$", 200

# this only runs if `$ python src/app.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    api.run(host='0.0.0.0', port=PORT, debug=False)