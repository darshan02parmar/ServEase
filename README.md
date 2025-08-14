# ServEase – Smart City Service Booking Platform

ServEase is a smart city service booking platform that enables users to discover, explore, and securely book local services such as travel, visa, and essential amenities.  
Built with **React**, **Node.js**, and **MySQL**, ServEase offers real-time payments, email confirmations, and an admin dashboard for seamless management.

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- Bootstrap / Tailwind CSS  

**Backend:**  
- Node.js + Express.js  

**Database:**  
- MySQL  

**Others:**  
- Nodemailer (Email notifications)  
- Multer (File uploads)  
- JWT (Authentication)  

---

## ✨ Features
✅ User Registration & Login (JWT authentication)  
✅ Forgot Password via Email  
✅ Add & Manage Services (with images)  
✅ Browse & Book Services  
✅ Payment Integration  
✅ Email Confirmation after Booking  
✅ Responsive UI  

---


## 📂 Folder Structure
```plaintext
ServEase/                  # Root project folder
├── backend/               # Node.js + Express backend
│   ├── package.json        # Backend dependencies and scripts
│   └── (API logic, controllers, DB config, etc.)
│
├── user/                  # React frontend
│   ├── package.json        # Frontend dependencies and scripts
│   └── (components, pages, assets, etc.)
│
├── .github/workflows/     # GitHub Actions workflows (if any)
├── .gitignore             # Files & folders to ignore in Git
├── package.json           # Optional root-level scripts (if used)
└── README.md              # ← You’re here!
```

## Installation & Setup
To get ServEase up and running on your local machine, follow these steps:

# 1. Clone the Repository
```bash
git clone https://github.com/darshan02parmar/ServEase.git
cd ServEase
```

# 2. Backend Setup
# Navigate to the backend directory, install dependencies, and start the server:
```bash
cd backend
npm install
node db.js
```

# 3. Frontend Setup
# Navigate to the user directory, install dependencies, and start the React development server:
```bash
cd ../user
npm install
npm start
```

## 📜 License
This project is licensed under the MIT License – feel free to use and modify.