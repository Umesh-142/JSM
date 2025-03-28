from flask import Flask
from flask_cors import CORS
from db import app, mongo
from routes import routes

CORS(app)  # Allow frontend requests
app.register_blueprint(routes)

if __name__ == "__main__":
    app.run(debug=True)
