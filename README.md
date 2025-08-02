# Service Booking Application

A full-stack web application for booking various services including car rental, food delivery, hill station tours, photography packages, and yoga classes.

## 🚀 Features

- **User Authentication**: Login and registration system
- **Service Booking**: Browse and book various services
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with React and Bootstrap
- **Backend API**: Node.js/Express server with MySQL database

## 📁 Project Structure

```
service-booking-app/
├── backend/          # Node.js/Express backend
├── user/            # React frontend application
└── README.md        # This file
```

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Bootstrap CSS
- Font Awesome Icons
- Axios for API calls
- SweetAlert2 for notifications

### Backend
- Node.js
- Express.js
- MySQL Database
- bcryptjs for password hashing
- nodemailer for email functionality
- multer for file uploads
- CORS for cross-origin requests

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL Database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/service-booking-app.git
   cd service-booking-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../user
   npm install
   ```

4. **Configure Database**
   - Create a MySQL database
   - Update database configuration in `backend/db.js`

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend application**
   ```bash
   cd user
   npm start
   ```

The application will be available at `http://localhost:3000`

## 📱 Available Services

- **Car Rental**: Book vehicles for your travel needs
- **Food Delivery**: Order food from local restaurants
- **Hill Station Tours**: Explore beautiful hill stations
- **Photography Packages**: Professional photography services
- **Yoga Classes**: Wellness and fitness sessions

## 🔧 Configuration

### Backend Configuration
Update the database connection in `backend/db.js`:
```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});
```

### Frontend Configuration
The React app is configured to run on port 3000 by default. You can change this in the `user/package.json` file.

## 📦 Deployment

### For GitHub Pages
1. **Automatic Deployment (Recommended)**
   - The GitHub Actions workflow will automatically build and deploy your app
   - Push your code to the main branch
   - Go to your repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Manual Deployment**
   ```bash
   cd user
   npm install
   npm run build
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Save the settings

### For Production
1. Set up environment variables
2. Configure your production database
3. Deploy backend to a hosting service (Heroku, Vercel, etc.)
4. Deploy frontend to a static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Bootstrap for the UI framework
- Font Awesome for icons
- React community for the amazing framework 