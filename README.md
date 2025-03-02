# CloudVault - Google Drive Clone

CloudVault is a full-stack cloud storage application inspired by Google Drive. It allows users to upload, manage, and share files securely.

## 🚀 Tech Stack

### **Frontend:**

- React.js
- TypeScript
- Tailwind CSS
- Redux Toolkit (for state management)
- React Query (for API calls)

### **Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- Multer (for file uploads)

---

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/cloudvault.git
cd cloudvault
```

### **2️⃣ Backend Setup**

```sh
cd backend
npm install
cp .env.example .env   # Add MongoDB URI & JWT Secret
npm run dev  # Start backend server
```

### **3️⃣ Frontend Setup**

```sh
cd frontend
npm install
npm run dev  # Start frontend
```

---

## 🔑 Environment Variables

Create a `.env` file in **backend/** with:

```
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/cloudvault
JWT_SECRET=your_jwt_secret
```

---

## 🚀 Features

✅ User Authentication (Login/Register with JWT)  
✅ File Upload & Download  
✅ Folder Structure for Organizing Files  
✅ Search & Filter Files  
✅ Dark Mode UI (Optional)

---

## 🏗️ Upcoming Features

🔹 File Sharing with Links  
🔹 User Role Management  
🔹 Real-time Collaboration

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added a new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request

---
