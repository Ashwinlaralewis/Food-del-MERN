# 🍅 Tomato – Food Delivery App  

Tomato is a **MERN Stack Food Delivery Web Application** with a dedicated **Admin Panel** for restaurant & order management.  
It allows users to browse restaurants, order food online, and pay securely with **Stripe Payments**.  

---

## 📖 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
  - [Backend Setup](#-backend-setup)
  - [Frontend & Admin Setup](#-frontend--admin-setup)
- [Environment Variables](#-environment-variables)
- [Video Tutorials](#-video-tutorials)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features
- 👤 User Authentication (Login / Signup with JWT)  
- 🍔 Browse food items & restaurants  
- 🛒 Add to Cart & Place Orders  
- 💳 Online Payments with **Stripe**  
- 📦 Order Tracking System  
- 🖥️ Admin Panel to manage **menus, users, and orders**  
- ☁️ MongoDB Atlas cloud storage  

---

## 🛠 Tech Stack
- **Frontend:** React (Vite), Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Payments:** Stripe  
- **State Management:** Context API / Redux (if used)  
- **Authentication:** JWT  

---

## ⚡ Installation & Setup

### 📂 Backend Setup

1. **Navigate to Backend Folder**
   ```sh
   cd backend
Install Dependencies

npm install


Setup MongoDB Atlas

Sign up at MongoDB Atlas

Create a project → Build Database (M0 Free Tier)

Add a DB user (avoid @ in password)

Whitelist IP: 0.0.0.0/0

Copy the Connection String and paste it into db.js (replace <password>).

Setup Stripe

Create a .env file in backend/ folder

Add:

STRIPE_SECRET_KEY=your_stripe_secret_key_here
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_connection_string
PORT=5000


Run Backend

npm run server


✅ Backend should now be running on http://localhost:5000.

🎨 Frontend & Admin Setup

Navigate to Frontend/Admin Folder

cd frontend   # or cd admin


Install Dependencies

npm install


Run Development Server

npm run dev


✅ The project will open in your browser (default: http://localhost:5173).

🔑 Environment Variables

Backend .env file should contain:

PORT=5000
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
