from flask import Flask #type:ignore
from flask_sqlalchemy import SQLAlchemy #type:ignore
from flask_cors import CORS #type:ignore

app=Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///mydb.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

db=SQLAlchemy(app)
