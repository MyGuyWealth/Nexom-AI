from flask import Flask, render_template
from flask_socketio import SocketIO

# Initialize Flask app
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")  # Allow cross-origin requests

# Event: When a user sends a message
@socketio.on("message")
def handle_message(msg):
    print(f"Received: {msg}")
    socketio.send(msg)  # Broadcast message to all connected clientstest

# Run the WebSocket server
if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000, debug=False, use_reloader=False)