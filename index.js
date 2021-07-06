const { response } = require("express");
const Express = require("express");
const { readFileSync } = require("fs");
const http = require("http");
const app = Express();
//creating a server
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(Express.static("./public"));
//setting up a route handler to test app
app.get("/", (request, response) => {
  //   response.send(`<h1>Hello World</h1>`);
  //to server files we should use file system module
  response.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
