from flask import request,jsonify # type: ignore
from config import app,db
from models import Contact

@app.route("/contacts",methods=["GET"])
def get_contact():
    contacts=Contact.query.all()
    json_contact=list(map(lambda x:x.to_json(),contacts))
    return jsonify({"contacts":json_contact})

@app.route("/create_contact",methods=["POST"])
def create_contact():
    first_name=request.json.get("firstName")
    last_name=request.json.get("lastName")
    email=request.json.get("email")
    if not first_name or not last_name or not email:
        return jsonify({"message":"must enter firstname, lastname and email"}),400
    new_contact=Contact(first_name=first_name,last_name=last_name,email=email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}),400
    
    return jsonify({"message":"User Created"}),201

@app.route("/update_contact/<int:user_id>",methods=["PATCH"])
def update_contact(user_id):
    contact=Contact.query.get(user_id)
    if not contact:
        return jsonify({"meddage":"Contact not Found"}),404
    data=request.json
    contact.first_name=data.get("firstName",contact.first_name)
    contact.last_name=data.get("lastName",contact.last_name)
    contact.email=data.get("email",contact.email)
    db.session.commit()
    return jsonify({"message":"User Created"}),201

@app.route("/delete_contact/<int:user_id>",methods=["DELETE"])
def delete_user(user_id):
    if not user_id:
        return jsonify({"message":"User not found"}),404
    contact=Contact.query.get(user_id)
    try:
        db.session.delete(contact)
        db.session.commit()
        return jsonify({"message":"user deleted"}),200
    except Exception as e:
        return jsonify({"message":str(e)}),400

if __name__=="__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)