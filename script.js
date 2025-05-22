document.getElementById("chat").innerHTML = "<p>Chat system loading...</p>";
const socket = new WebSocket("ws://localhost:5000");