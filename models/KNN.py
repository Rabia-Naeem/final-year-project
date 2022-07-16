from re import X
import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import warnings
from sklearn.metrics import accuracy_score
import pickle


#setting data-set
data=pd.read_csv("data.csv")
data=data.drop(columns='crop')
X=data.drop(columns='pump')
y=data['pump']
y=y.astype(str)

#splitting training and testing data
X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.20)

#applyinh KNN classifyer for model generation
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train.values, y_train)

#prediction
predictions = model.predict(X_test.values)
#checking accuracy
accuracy=accuracy_score(y_test, predictions)
print('*******************KNN*******************')
print(accuracy)



# saving the model for future
pickle.dump(model, open('KNN.pkl', 'wb'))
loaded_model_KNN = pickle.load(open('KNN.pkl', 'rb'))

# prediction using loaded model
result = loaded_model_KNN.score(X_test, y_test)
print(result)