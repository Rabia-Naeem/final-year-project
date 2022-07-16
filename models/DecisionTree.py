import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pickle


# data load
data=pd.read_csv("data.csv")
data=data.drop(columns='crop')
X=data.drop(columns=['pump'])
y=data['pump']
y=y.astype(str)

#model generation and data training
model=DecisionTreeClassifier()
model.fit(X.values,y)



# splitiing data and fitting model
X_train, X_test, y_train, y_test=train_test_split(X,y,test_size=0.2)
model.fit(X_train, y_train)
prediction=model.predict(X_test)

#accuracy calculation
score=accuracy_score(y_test, prediction)
print(score)

# saving the model for future
pickle.dump(model, open('DecisionTree.pkl', 'wb'))
loaded_model_DT = pickle.load(open('DecisionTree.pkl', 'rb'))

# prediction using loaded model
result = loaded_model_DT.score(X_test, y_test)
print(result)