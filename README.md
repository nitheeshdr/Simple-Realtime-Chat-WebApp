A real-time chat application using **Node.js**, **Express**, **Socket.IO**, and **MongoDB**. Users can enter their names to join the chat, see messages from others instantly, and view who is typing in real-time. All messages are saved in MongoDB.

---

## 🚀 Features

- 🧑 Name prompt before entering chat
- 📡 Real-time message broadcasting using Socket.IO
- 📝 Typing indicator (e.g., "Nitheesh is typing...")
- 💾 Messages saved to MongoDB
- 🎨 Simple, clean UI with HTML/CSS
- 🌐 Deployable on Render or any Node-friendly platform

---

## 📸 Screenshot

> *(Add a screenshot of your chat app UI here)*

---

## 🛠️ Built With

- Node.js
- Express.js
- Socket.IO
- MongoDB (via Mongoose)
- HTML / CSS / JavaScript

---

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/realtime-chat-app.git
cd realtime-chat-app
npm install
⚙️ Environment Setup
🗂 .env file
Create a .env file in the root directory:

env
Copy
Edit
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chatApp?retryWrites=true&w=majority
💡 Replace <username> and <password> with your MongoDB Atlas credentials.

▶️ Run the App Locally
bash
Copy
Edit
node server.js
Open in your browser:

arduino
Copy
Edit
http://localhost:3000
☁️ MongoDB Atlas Setup (Cloud DB)
Go to https://www.mongodb.com/cloud/atlas/register

Create a free cluster (Shared Tier)

Create a database named chatApp

Create a DB user with username/password

Allow IP access: 0.0.0.0/0 (for dev)

Copy your connection string from “Connect → Drivers”

Paste it into your .env as MONGO_URI

🌍 Deploy on Render
Push your project to GitHub

Go to https://render.com

Create a new Web Service

Connect your GitHub repo

Set Build & Deploy Settings:

Start Command: node server.js

Environment Variable: MONGO_URI

Deploy and wait for live URL

📂 Project Structure
pgsql
Copy
Edit
chat-app/
├── public/
│   ├── index.html
│   └── style.css
├── server.js
├── .env
├── package.json
🧪 Testing
Open multiple tabs or devices and start chatting with different names. You’ll see messages update in real time and typing indicators from others.

🧑 Author
Made with ❤️ by Nitheesh Rajendran

🎬 Filmmaker & UI/UX Designer

🌐 Web: nitheeshdr.in

📷 Instagram: @nitheesh.rajendran

📄 License
This project is licensed under the MIT License.