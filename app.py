from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
app = Flask(__name__)
app.config['CORS_HEADERS']='Content-Type'
CORS(app, support_credentials=True)

def add(a,b):
   return int(a)+int(b)

def sub(a,b):
   return int(a)-int(b)

def mult(a,b):
   return int(a)*int(b)

def div(a,b):
   return int(a)/int(b)

@app.route("/predict",methods=["GET","POST"])
@cross_origin(supports_credentials=True)
def Calc():
   data=request.get_json()
   print(data)
   print(type(data))
   a=data[0]
   b=data[1]
   if(data[2]=="+"):
      res=add(a,b)
   elif(data[2]=="-"):
      res=sub(a,b)
   elif(data[2]=="*"):
      res=mult(a,b)
   elif(data[2]=="/"):
      res=div(a,b)
   return str(res)

if __name__ == '__main__':
   app.run(debug=True)
