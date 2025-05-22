const socket = new WebSocket("ws://localhost:5000");

socket.onopen = () => console.log("Connected!");

socket.onmessage = (event) => {
    document.getElementById("chatBox").innerText += `\n${event.data}`;
};

document.getElementById("sendButton").addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    if (input.value.trim() !== "") {
        socket.send(input.value);
        input.value = "";
    }
});