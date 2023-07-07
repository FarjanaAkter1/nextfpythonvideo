from flask import Flask ,jsonify

from flask_cors import CORS


app = Flask(__name__)

CORS(app)

@app.route("/api/home",methods=['GET'])
def return_home():
   return jsonify({
      
"message":"Hello world From Farjana Akter",
'people':['jack','marry','barry','Farjana','Aariz']

   }
   )

if __name__ == "__main__":
  app.run(debug = True, port=8080)


