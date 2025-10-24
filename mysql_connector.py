import mysql.connector
from dotenv import load_dotenv
load_dotenv()
import os

mydb = mysql.connector.connect(
    host=os.getenv('DB_HOST'),          
    user=os.getenv('DB_USER'),          
    password=os.getenv('DB_PASSWORD'),
    port=os.getenv('DB_PORT'),          
    database=os.getenv('DB_DATABASE'),
    ssl_ca='ca.pem' 
)

mycursor = mydb.cursor()
mycursor.execute("insert into Employee (First_name,Last_Name, Employee_ID, Phone_Number) values('Nate2', 'Pham2', 32145, '123')")
mydb.commit()
mycursor.execute("select * from Employee")

data = mycursor.fetchall()
for i in data:
    print(f"First_Name: {i[0]}, Last_Name: {i[1]}, Employee_ID: {i[2]}, Phone_Number: {i[3]}")

mycursor.close()
mydb.close()
