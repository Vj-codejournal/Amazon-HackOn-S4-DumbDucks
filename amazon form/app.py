from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return "Server is running"

@app.route('/<path:path>')
def send_form(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(debug=True, port=3000)