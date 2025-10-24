import mysql.connector
from dotenv import load_dotenv
load_dotenv()
import os

mydb = mysql.connector.connect(
host='localhost',
user='root',
password=os.getenv('DB_PASSWORD'),
port='3306',
database='Project'
)

mycursor = mydb.cursor()
#mycursor.execute('insert into Employee(First_name,Last_Name, Employee_ID) values("Nate2", "Pham2", 321)')
#mydb.commit()
mycursor.execute("select * from Employee")

data = mycursor.fetchall()
for i in data:
    print(f"First_Name: {i[0]}, Last_Name: {i[1]}, Employee_ID: {i[2]}, Phone_Number: {i[3]}")