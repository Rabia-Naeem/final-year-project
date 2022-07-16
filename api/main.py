# Importing necessary libraries
from typing_extensions import NotRequired
import uvicorn
import joblib
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initializing the fast API server
app = FastAPI()
origins = [
"http://localhost.tiangolo.com",
"https://localhost.tiangolo.com",
"http://localhost",
"http://localhost:8000",
"http://localhost:3000",
]

app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

# Loading up the trained model

DTmodel = joblib.load(open('../Models/DecisionTree.pkl', 'rb'))
KNNmodel = joblib.load(open('../Models/KNN.pkl', 'rb'))
NBmodel = joblib.load(open('../Models/NaiveBayes.pkl', 'rb'))


class Candidate(BaseModel):
    moisture: int
    temp: int

# Setting up the home route
@app.get("/")
def read_root():
        return {"data": "Welcome to online water requirement prediction model"}


# Setting up the prediction route
@app.post("/prediction/")
async def get_predict(data: Candidate):
    sample = [[
        data.moisture,
        data.temp
        ]]
    predictions=[];
    print((predictions.append(DTmodel.predict(sample).tolist())))
    print((predictions.append(KNNmodel.predict(sample).tolist())))
    print((predictions.append(NBmodel.predict(sample).tolist())))
    required=notRequireed=0    
    for prediction in predictions:    
        if(prediction==['0']):
            notRequireed+=1;
        else:
            required+=1
    return{
        "data":{
            'prediction': required,
            'interpretation' : 'water is required' if required>notRequireed else 'water is not Required'
        }
    }

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')
