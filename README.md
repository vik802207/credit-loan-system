# 💳 Credit Loan Management System

A full-stack web application for managing and approving loan requests with **role-based access** for **Admin** and **Verifier** users. This system also includes wallet balance tracking, loan disbursal monitoring, and user management features.

---

## 🔧 Tech Stack

- **Frontend**: React, HTML, CSS (with optional Tailwind)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Custom CSS / CSS Modules

---

## 📚 Features

### 🧑‍💻 Authentication
- Login/Signup with JWT
- Role-based access: `admin`, `verifier`

### 📊 Admin Dashboard
- Manage all loan applications
- Approve/Reject loans
- Wallet overview:
  - Wallet Balance
  - Total Disbursed
  - Total Savings
- Add new Admins

### ✅ Verifier Dashboard
- View & verify pending loans
- Status management
- Basic user and wallet overview

### 💼 Wallet System
- Wallet balance display
- Tracks total disbursed loans
- Total savings calculation

### 📝 Loan Application
- Application form (user side)
- Tracks `verifierStatus` and `adminStatus` workflow

---

### 🚀 Getting Started

### 2. Setup Backend
cd backend
npm install
npm run dev
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000
## 3. Setup Frontend
cd frontend
npm install
npm start
## 🔑 Roles & Access
Role	Access
Admin	Full access to all applications, wallets, user management
Verifier	Can verify/reject applications before admin review
## 📁 Folder Structure
```bash
credit-loan-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.js
│   └── public/
└── README.md
```
## 📸 Screenshots
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(334).png?raw=true)
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(340).png?raw=true)
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(341).png?raw=true)
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(342).png?raw=true)
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(335).png?raw=true)
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(336).png?raw=true)
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(337).png?raw=true)
![Alt text](https://github.com/vik802207/credit-loan-system/blob/master/img/Screenshot%20(338).png?raw=true)


## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## 📜 License
This project is licensed under the MIT License.
## 🔗 Live Demo
👉 ChatGPT Clone Live
## [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://magical-cat-74ec58.netlify.app/)

## 👨‍💻 Author
Developed by Vikash Gupta
📧 Contact: vikashg802207@gmail.com

yaml
Copy
Edit


