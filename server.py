from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Serve a simple homepage
@app.route("/")
def home():
    return "Flask WebSocket Server is Running!"

@socketio.on("message")
def handle_message(msg):
    print(f"Received: {msg}")  # Debugging output
    socketio.send(msg)

if __name__ == "__main__":
    print("Starting Flask WebSocket Server...")
    socketio.run(app, host="0.0.0.0", port=5000, debug=True, use_reloader=False)