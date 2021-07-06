# Basic-chat-app
This repository contains all the files created while i was learning socket.io

The way in which socket.io works?

so each socket you set up is considered to be a user. so if communication between two users is considered it is technically the communication between two different
sockets. so what happens is if a user is trying to send a message then the socket on his end will emit the message to the server which is considered to be the 
center point of this application. so then server on recieveing the message will broadcast it to the remaining users that are connected meaning it will emit the message to all other sockets (including the socket from which message is sent if we didnt set that manually).
