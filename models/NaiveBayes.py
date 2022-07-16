from re import X
import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
import warnings
import pickle

#setting data-set
data=pd.read_csv("data.csv")
data=data.drop(columns='crop')
X=data.drop(columns='pump')
y=data['pump']
y=y.astype(str)


# #splitting training and testing data
X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.20)


#  create a gaussianNB classifierfor 
model = GaussianNB()
model.fit(X_train.values, y_train)


#prediction with actual values
predictions = model.predict(X_test.values)



# #checking accuracy
accuracy=accuracy_score(y_test, predictions)
print('*******************Naive Bayes*******************')
print(accuracy)

# saving the model for future
pickle.dump(model, open('NaiveBayes.pkl', 'wb'))
loaded_model_NaiveBayes = pickle.load(open('NaiveBayes.pkl', 'rb'))

# prediction using loaded model
result = loaded_model_NaiveBayes.score(X_test, y_test)
print(result)
