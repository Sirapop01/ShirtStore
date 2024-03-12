from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

uri = "mongodb+srv://Apiwit:192922@cluster0.k7xei6x.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["SHIRTSTOREBYMARTLAEMBANG"]
collections = {
    "collection1": db["shirtmanu"],
    "collection2": db["shirtmancity"],
    "collection3": db["shirtLiver"],
    "collection4": db["shirtarsenal"],
    "detail1": db["Manudetails"],
    "detail2": db["lfcdetails"],
    "detail3": db["Mancitydetails"],
    "detail4": db["arsdetail"]
}

@app.route("/")
def greet():
    return "<p>Welcome to SHIRTSTORE MART LAEMBANG.COM  </p>"

@app.route("/shirtmanu", methods=["GET"])
def get_all_shirtmanu():
    shirtmanu = list(collections["collection1"].find())
    return jsonify(shirtmanu)

@app.route("/shirtmanu/<int:shirtmanu_id>", methods=["GET"])
def get_shirtmanu(shirtmanu_id):
    shirtmanu = collections["collection1"].find_one({"_id": shirtmanu_id})
    if shirtmanu:
        return jsonify(shirtmanu)
    else:
        return jsonify({"error": "product not found"}), 404


@app.route("/shirtmanu", methods=["POST"])
def create_shirtmanu():
    data = request.get_json()
    existing_shirtmanu = collections["collection1"].find_one({"shirtmanu_code": data["shirtmanu_code"]})
    if existing_shirtmanu:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["collection1"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/shirtmanu/<int:shirtmanu_id>", methods=["PUT"])
def update_shirtmanu(shirtmanu_id):
    data = request.get_json()
    existing_shirtmanu = collections["collection1"].find_one({"_id": shirtmanu_id})
    if existing_shirtmanu:
        collections["collection1"].update_one({"_id": shirtmanu_id}, {"$set": data})
        updated_shirtmanu = collections["collection1"].find_one({"_id": shirtmanu_id})
        return jsonify(updated_shirtmanu)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/shirtmanu/<int:shirtmanu_id>", methods=["DELETE"])
def delete_shirtmanu(shirtmanu_id):
    result = collections["collection1"].delete_one({"_id": shirtmanu_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404
    
# -------------------------------------------------------------------------------------------------------

@app.route("/shirtmancity", methods=["GET"])
def get_all_shirtmancity():
    shirtmancity = list(collections["collection2"].find())
    return jsonify(shirtmancity)

@app.route("/shirtmancity/<int:shirtmancity_id>", methods=["GET"])
def get_shirtmancity(shirtmancity_id):
    shirtmancity = collections["collection2"].find_one({"_id": shirtmancity_id})
    if shirtmancity:
        return jsonify(shirtmancity)
    else:
        return jsonify({"error": "product not found"}), 404


@app.route("/shirtmancity", methods=["POST"])
def create_shirtmancity():
    data = request.get_json()
    existing_shirtmancity = collections["collection2"].find_one({"shirtmancity_code": data["shirtmancity_code"]})
    if existing_shirtmancity:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["collection2"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/shirtmancity/<int:shirtmancity_id>", methods=["PUT"])
def update_shirtmancity(shirtmancity_id):
    data = request.get_json()
    existing_shirtmancity = collections["collection2"].find_one({"_id": shirtmancity_id})
    if existing_shirtmancity:
        collections["collection2"].update_one({"_id": shirtmancity_id}, {"$set": data})
        updated_shirtmancity = collections["collection2"].find_one({"_id": shirtmancity_id})
        return jsonify(updated_shirtmancity)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/shirtmancity/<int:shirtmancity_id>", methods=["DELETE"])
def delete_shirtmancity(shirtmancity_id):
    result = collections["collection2"].delete_one({"_id": shirtmancity_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404
    
# -------------------------------------------------------------------------------------------------------

@app.route("/shirtLiver", methods=["GET"])
def get_all_shirtLiver():
    shirtLiver = list(collections["collection3"].find())
    return jsonify(shirtLiver)

@app.route("/shirtLiver/<int:shirtLiver_id>", methods=["GET"])
def get_shirtLiver(shirtLiver_id):
    shirtLiver = collections["collection3"].find_one({"_id": shirtLiver_id})
    if shirtLiver:
        return jsonify(shirtLiver)
    else:
        return jsonify({"error": "product not found"}), 404


@app.route("/shirtLiver", methods=["POST"])
def create_shirtLiver():
    data = request.get_json()
    existing_shirtLiver = collections["collection3"].find_one({"shirtLiver_code": data["shirtLiver_code"]})
    if existing_shirtLiver:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["collection3"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/shirtLiver/<int:shirtLiver_id>", methods=["PUT"])
def update_shirtLiver(shirtLiver_id):
    data = request.get_json()
    existing_shirtLiver = collections["collection3"].find_one({"_id": shirtLiver_id})
    if existing_shirtLiver:
        collections["collection3"].update_one({"_id": shirtLiver_id}, {"$set": data})
        updated_shirtLiver = collections["collection3"].find_one({"_id": shirtLiver_id})
        return jsonify(updated_shirtLiver)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/shirtLiver/<int:shirtLiver_id>", methods=["DELETE"])
def delete_shirtLiver(shirtLiver_id):
    result = collections["collection3"].delete_one({"_id": shirtLiver_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404
    
# ------------------------------------------------------------------------------------------------------- 

@app.route("/shirtarsenal", methods=["GET"])
def get_all_shirtarsenal():
    shirtarsenal = list(collections["collection4"].find())
    return jsonify(shirtarsenal)

@app.route("/shirtarsenal/<int:shirtarsenal_id>", methods=["GET"])
def get_shirtarsenal(shirtarsenal_id):
    shirtarsenal = collections["collection4"].find_one({"_id": shirtarsenal_id})
    if shirtarsenal:
        return jsonify(shirtarsenal)
    else:
        return jsonify({"error": "product not found"}), 404


@app.route("/shirtarsenal", methods=["POST"])
def create_shirtarsenal():
    data = request.get_json()
    existing_shirtarsenal = collections["collection4"].find_one({"shirtarsenal_code": data["shirtarsenal_code"]})
    if existing_shirtarsenal:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["collection4"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/shirtarsenal/<int:shirtarsenal_id>", methods=["PUT"])
def update_shirtarsenal(shirtarsenal_id):
    data = request.get_json()
    existing_shirtarsenal = collections["collection4"].find_one({"_id": shirtarsenal_id})
    if existing_shirtarsenal:
        collections["collection4"].update_one({"_id": shirtarsenal_id}, {"$set": data})
        updated_shirtarsenal = collections["collection4"].find_one({"_id": shirtarsenal_id})
        return jsonify(updated_shirtarsenal)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/shirtarsenal/<int:shirtarsenal_id>", methods=["DELETE"])
def delete_shirtarsenal(shirtarsenal_id):
    result = collections["collection4"].delete_one({"_id": shirtarsenal_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404

# ---------------------------------------------------------------------------------------------------
@app.route("/manushirt", methods=["GET"])
def get_all_manushirt():
    manushirt = list(collections["detail1"].find())
    return jsonify(manushirt)

@app.route("/manushirt/<int:manushirt_id>", methods=["GET"])
def get_manushirt(manushirt_id):
    manushirt = collections["detail1"].find_one({"_id": manushirt_id})
    if manushirt:
        return jsonify(manushirt)
    else:
        return jsonify({"error": "product not found"}), 404
    
@app.route("/manushirt", methods=["POST"])
def create_manushirt():
    data = request.get_json()
    existing_manushirt = collections["detail1"].find_one({"manushirt_code": data["manushirt_code"]})
    if existing_manushirt:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["detail1"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/manushirt/<int:manushirt_id>", methods=["PUT"])
def update_manushirt(manushirt_id):
    data = request.get_json()
    existing_manushirt = collections["detail1"].find_one({"_id": manushirt_id})
    if existing_manushirt:
        collections["detail1"].update_one({"_id": manushirt_id}, {"$set": data})
        updated_manushirt = collections["detail1"].find_one({"_id": manushirt_id})
        return jsonify(updated_manushirt)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/manushirt/<int:manushirt_id>", methods=["DELETE"])
def delete_manushirt(manushirt_id):
    result = collections["detail1"].delete_one({"_id": manushirt_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404
    
# ---------------------------------------------------------------------------------------------------
#Man U detail
@app.route("/Manudetails", methods=["GET"])
def get_all_Manudetails():
    Manudetails = list(collections["detail1"].find())
    return jsonify(Manudetails)

@app.route("/Manudetails/<int:Manudetails_id>", methods=["GET"])
def get_Manudetails(Manudetails_id):
    Manudetails = collections["detail1"].find_one({"_id": Manudetails_id})
    if Manudetails:
        return jsonify(Manudetails)
    else:
        return jsonify({"error": "product not found"}), 404
    
@app.route("/Manudetails", methods=["POST"])
def create_Manudetails():
    data = request.get_json()
    existing_Manudetails = collections["detail1"].find_one({"Manudetails_code": data["Manudetails_code"]})
    if existing_Manudetails:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["detail1"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/Manudetails/<int:Manudetails_id>", methods=["PUT"])
def update_Manudetails(Manudetails_id):
    data = request.get_json()
    existing_Manudetails = collections["detail1"].find_one({"_id": Manudetails_id})
    if existing_Manudetails:
        collections["detail1"].update_one({"_id": Manudetails_id}, {"$set": data})
        updated_Manudetails = collections["detail1"].find_one({"_id": Manudetails_id})
        return jsonify(updated_Manudetails)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/Manudetails/<int:Manudetails_id>", methods=["DELETE"])
def delete_Manudetails(Manudetails_id):
    result = collections["detail1"].delete_one({"_id": Manudetails_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404

#------------------------------------------------------------------------------------------------------
#LFCshisrt
@app.route("/lfcdetails", methods=["GET"])
def get_all_lfcdetails():
    lfcdetails = list(collections["detail2"].find())
    return jsonify(lfcdetails)

@app.route("/lfcdetails/<int:lfcdetails_id>", methods=["GET"])
def get_lfcdetails(lfcdetails_id):
    lfcdetails = collections["detail2"].find_one({"_id": lfcdetails_id})
    if lfcdetails:
        return jsonify(lfcdetails)
    else:
        return jsonify({"error": "product not found"}), 404
    
@app.route("/lfcdetails", methods=["POST"])
def create_lfcdetails():
    data = request.get_json()
    existing_lfcdetails = collections["detail2"].find_one({"lfcdetails_code": data["lfcdetails_code"]})
    if existing_lfcdetails:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["detail2"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/lfcdetails/<int:lfcdetails_id>", methods=["PUT"])
def update_lfcdetails(lfcdetails_id):
    data = request.get_json()
    existing_lfcdetails = collections["detail2"].find_one({"_id": lfcdetails_id})
    if existing_lfcdetails:
        collections["detail2"].update_one({"_id": lfcdetails_id}, {"$set": data})
        updated_lfcdetails = collections["detail2"].find_one({"_id": lfcdetails_id})
        return jsonify(updated_lfcdetails)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/lfcdetails/<int:lfcdetails_id>", methods=["DELETE"])
def delete_lfcdetails(lfcdetails_id):
    result = collections["detail2"].delete_one({"_id":lfcdetails_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404


#------------------------------------------------------------------------------------------------------
#Arsenal details
@app.route("/arsdetail", methods=["GET"])
def get_all_arsdetail():
    arsdetail = list(collections["detail3"].find())
    return jsonify(arsdetail)

@app.route("/arsdetail/<int:arsdetail_id>", methods=["GET"])
def get_arsdetail(arsdetail_id):
    arsdetail = collections["detail3"].find_one({"_id": arsdetail_id})
    if arsdetail:
        return jsonify(arsdetail)
    else:
        return jsonify({"error": "product not found"}), 404
    
@app.route("/arsdetail", methods=["POST"])
def create_arsdetail():
    data = request.get_json()
    existing_arsdetail = collections["detail3"].find_one({"arsdetail_code": data["arsdetail_code"]})
    if existing_arsdetail:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["detail3"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/arsdetail/<int:arsdetail_id>", methods=["PUT"])
def update_arsdetail(arsdetail_id):
    data = request.get_json()
    existing_arsdetails = collections["detail3"].find_one({"_id": arsdetail_id})
    if existing_arsdetails:
        collections["detail3"].update_one({"_id": arsdetail_id}, {"$set": data})
        updated_arsdetails = collections["detail3"].find_one({"_id": arsdetail_id})
        return jsonify(updated_arsdetails)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/arsdetail/<int:arsdetail_id>", methods=["DELETE"])
def delete_arsdetail(arsdetail_id):
    result = collections["detail3"].delete_one({"_id":arsdetail_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404

#------------------------------------------------------------------------------------------------------
#Mancity details 55555
@app.route("/Mancitydetails", methods=["GET"])
def get_all_Mancitydetails():
    Mancitydetails = list(collections["detail4"].find())
    return jsonify(Mancitydetails)

@app.route("/Mancitydetails/<int:Mancitydetails_id>", methods=["GET"])
def get_Mancitydetails(Mancitydetails_id):
    Mancitydetails = collections["detail3"].find_one({"_id": Mancitydetails_id})
    if Mancitydetails:
        return jsonify(Mancitydetails)
    else:
        return jsonify({"error": "product not found"}), 404
    
@app.route("/Mancitydetails", methods=["POST"])
def create_Mancitydetails():
    data = request.get_json()
    existing_Mancitydetails = collections["detail4"].find_one({"Mancitydetails_code": data["Mancitydetails_code"]})
    if existing_Mancitydetails:
        return jsonify({"error": "Shirt with the same product code already exists"}), 409
    else:
        collections["detail4"].insert_one(data)
        return jsonify({"message": "Shirt created successfully"}), 201

@app.route("/Mancitydetails/<int:Mancitydetails_id>", methods=["PUT"])
def update_Mancitydetails(Mancitydetails_id):
    data = request.get_json()
    existing_Mancitydetails = collections["detail4"].find_one({"_id": Mancitydetails_id})
    if existing_Mancitydetails:
        collections["detail4"].update_one({"_id": Mancitydetails_id}, {"$set": data})
        updated_Mancitydetails = collections["detail4"].find_one({"_id": Mancitydetails_id})
        return jsonify(updated_Mancitydetails)
    else:
        return jsonify({"error": "shirt not found"}), 404
    
@app.route("/Mancitydetails/<int:Mancitydetails_id>", methods=["DELETE"])
def delete_Mancitydetails(Mancitydetails_id):
    result = collections["detail4"].delete_one({"_id":Mancitydetails_id})
    if result.deleted_count:
        return jsonify({"message": "Shirt deleted successfully"}), 200
    else:
        return jsonify({"error": "Shirt not found"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)