const socket = new WebSocket("ws://localhost:5000");

socket.onopen = () => console.log("✅ WebSocket Connected!");

socket.onmessage = (event) => {
    document.getElementById("chatBox").innerText += `\n${event.data}`;
};

socket.onclose = (event) => {
    console.warn("❌ WebSocket Closed", event);
    setTimeout(() => {
        console.log("🔄 Reconnecting WebSocket...");
        location.reload(); // Refresh page to retry connection
    }, 2000);
};