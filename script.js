// 1️⃣ Establish WebSocket Connection
const socket = new WebSocket("ws://localhost:5000");  // Change to server IP if hosted remotely

// 2️⃣ Handle Connection Events
socket.onopen = () => {
    console.log("✅ Connected to WebSocket server!");
};

// 3️⃣ Handle Incoming Messages
socket.onmessage = (event) => {
    console.log("📩 Message received:", event.data);
    displayMessage(event.data);  // Function to update the chat UI
};

// 4️⃣ Handle Errors
socket.onerror = (error) => {
    console.error("🚨 WebSocket Error:", error);
};

// 5️⃣ Handle Connection Closure
socket.onclose = () => {
    console.log("❌ WebSocket connection closed.");
};

// 6️⃣ Send Messages to Server
function sendMessage() {
    const input = document.getElementById("messageInput").value;
    if (input.trim() !== "") {
        socket.send(input);
        displayMessage(`You: ${input}`); // Show the message in the UI
        document.getElementById("messageInput").value = ""; // Clear input after sending
    }
}

// 7️⃣ Function to Display Messages in Chat UI
function displayMessage(msg) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("p");
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
}

// 8️⃣ Add Event Listener to Send Button
document.getElementById("sendButton").addEventListener("click", sendMessage);