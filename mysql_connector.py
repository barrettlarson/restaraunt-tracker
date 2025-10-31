import os, mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

def get_conn():
    return mysql.connector.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        port=os.getenv('DB_PORT'),
        database=os.getenv('DB_DATABASE'),
        ssl_ca='ca.pem'
    )

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000","http://localhost:5173"]}})

@app.post("/employees")
def add_employee():
    data = request.get_json(force=True)
    first = data.get("first_name", "").strip()
    last  = data.get("last_name", "").strip()
    eid   = data.get("employee_id")
    phone = data.get("phone_number", "").strip()

    if not first or not last or eid is None or not str(eid).strip():
        return jsonify({"error":"Missing required fields"}), 400

    try:
        eid = int(eid)
    except ValueError:
        return jsonify({"error":"employee_id must be an integer"}), 400

    conn = get_conn()
    cur = conn.cursor()
    try:
        cur.execute(
            "INSERT INTO Employee (First_Name, Last_Name, Employee_ID, Phone_Number) VALUES (%s,%s,%s,%s)",
            (first, last, eid, phone)
        )
        conn.commit()
        return jsonify({"ok": True}), 201
    except mysql.connector.Error as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close(); conn.close()

@app.post("/ingredients")
def add_ingredient():
    data = request.get_json(force=True)
    name = data.get("name", "").strip()
    amount = data.get("amount")
    storage_type = data.get("storage_type", "").strip()

    if not name or not storage_type or amount is None or not str(amount).strip():
        return jsonify({"error": "Missing required fields"}), 400

    conn = get_conn()
    cur = conn.cursor()
    try: 
        cur.execute(
            "INSERT INTO Ingredient (Name, Amount, Storage_Type) VALUES (%s, %s, %s)",
            (name, amount, storage_type)
        )
        conn.commit()
        return jsonify({"ok": True}), 201
    except mysql.connector.Error as e:
        conn.rollback()
        return jsonify({"error" : str(e)}), 400
    finally:
        cur.close(); conn.close()


if __name__ == "__main__":
    app.run(port=8000, debug=True)
