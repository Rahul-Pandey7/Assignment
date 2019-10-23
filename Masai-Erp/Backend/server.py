from flask import Flask
from flask import request
import json
import random
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/black-box"
mongo = PyMongo(app)

#current_students

@app.route('/register/current',methods=['POST'])
def register_current_students():
    data = dict()
    data['name'] = request.json['name']
    data['batch'] = request.json['batch']
    data['student_code'] = request.json['student_code']
    data['mobile'] = int(request.json['mobile'])
    data['email'] = request.json['email']
    data['password'] = request.json['password']

    find_email = mongo.db.students.find_one({"email": data['email']})
    if find_email != None:
        return dumps({"message": "Email already in use"})
    else:
        mongo.db.students.insert_one(data)
        return dumps({"message": "User Created"})

@app.route('/show/current')
def show_current_students():
    data = dict()
    data= mongo.db.students.find({})
    return dumps (data)


#placed Students
@app.route('/register/placed',methods=["POST"])
def register_placed_students():
    data = dict()
    data['name'] = request.json['name']
    data['batch'] = request.json['batch']
    data['student_code'] = request.json['student_code']
    data['company_name'] = request.json['company_name']
    data['designation'] = request.json['designation']
    data['email'] = request.json['email']
    data['password'] = request.json['password']

    find_email = mongo.db.placed.find_one({"email": data['email']})
    if find_email != None:
        return dumps({"message": "Email already in use"})
    else:
        mongo.db.placed.insert_one(data)
        return dumps({"message": "User Created"})

@app.route('/show/placed')
def show_placed_students():
    data = dict()
    data= mongo.db.placed.find({})
    return dumps (data)