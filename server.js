const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI ||"mongodb+srv://admin:<db_password>@cluster0.pq8bsxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ChatSchema = new mongoose.Schema({
  name: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', ChatSchema);

io.on('connection', async (socket) => {
  console.log('A user connected');

  const messages = await Chat.find().sort({ timestamp: 1 }).limit(50);
  messages.forEach(msg => {
    socket.emit('chat message', `${msg.name}: ${msg.message}`);
  });

  socket.on('chat message', async (data) => {
    const fullMessage = `${data.name}: ${data.message}`;
    io.emit('chat message', fullMessage);
    const chat = new Chat({ name: data.name, message: data.message });
    await chat.save();
  });

  socket.on('typing', (name) => {
    socket.broadcast.emit('typing', name);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});