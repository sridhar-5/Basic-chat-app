// this is loading the client side of the socket.io (socket.io-client)
//it exposes an io global object

var socket = io();

//we are not specifying any url to g\connect becaue it defaults to  connect to the host that servers the page

//getting the input and the button
const input = document.getElementById("input");
const formSubmitted = document.getElementById("form");
const messages = document.getElementById("messages");
//adding event listener on that message holding field
formSubmitted.addEventListener("submit", formSubmitAction);

function formSubmitAction(event) {
  event.preventDefault();

  if (input.value) {
    //sending the message to the server
    socket.emit("chat message", input.value);
    input.value = "";
  }
}

socket.on("chat message", (message) => {
  var newmessage = document.createElement("li");
  newmessage.textContent = message;
  messages.appendChild(newmessage);
  window.scrollTo(0, document.body.scrollHeight);
});
