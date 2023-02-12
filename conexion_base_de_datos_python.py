

from pymongo import MongoClient
MONGO_URI = 'mongodb://localhost'

client = MongoClient(MONGO_URI)

db = client['laptop']
collection = db['modelo']

#collection.insert_one({"modelo":"iphone","familia":8})
results = collection.find()
for r in results:
    print(r)
