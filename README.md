# 🚗 CarPool – Smart Ride Sharing Platform

CarPool is a scalable, full-stack ride-sharing platform that connects drivers and passengers for optimized carpooling. The project is designed to reduce traffic congestion, carbon emissions, and daily commute costs by encouraging shared rides. It integrates real-time chat, wallet-based payments, secure authentication, and geolocation services to deliver a seamless user experience.

---

## 🌐 Tech Stack

- **Frontend**: Tailwind CSS, React.js, Vite  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose ODM  
- **Authentication**: Firebase Auth (Email & Google)  
- **Real-Time Features**: Socket.IO  
- **Geolocation**: Google Maps JavaScript & Places API  
- **Payments**: Razorpay  
- **Containerization**: Docker & Docker Compose  
- **Deployment**: Vercel (Frontend), Render (Backend), MongoDB Atlas

---

## 🚀 Features

- 🔍 **Destination-Based Ride Matching**  
  Users can search for available rides by destination using Google Maps Autocomplete for precise queries.

- 🗺️ **Google Maps API Integration**  
  Displays map previews, captures geo-coordinates, and suggests verified locations using Google Places.

- 💬 **Real-Time Chat**  
  Enables secure in-app communication between drivers and passengers via Socket.IO.

- 💳 **Wallet-Based Payment System**  
  Users can add funds, split fares, and pay securely using Razorpay.

- 🔐 **Authentication & Authorization**  
  Secure login with Google or Email/Password using Firebase Authentication.

- 🛠️ **Admin Panel (Coming Soon)**  
  Role-based controls to manage ride listings, user reports, and payments.

---

## 📸 Screenshots

### Home Page
<img width="1440" height="811" alt="image" src="https://github.com/user-attachments/assets/7a40116b-e8d3-48ed-ac2e-db690cf28d51" />


### Ride Search
<img width="1440" height="570" alt="image" src="https://github.com/user-attachments/assets/f5523703-8c7a-4c4c-bdb2-c2a5f12c99c4" />



### Booking Page
<img width="1440" height="462" alt="image" src="https://github.com/user-attachments/assets/e06d7361-41f8-47c0-838d-57cf49014158" />


### User Dashboard
<img width="1440" height="484" alt="image" src="https://github.com/user-attachments/assets/4c3808aa-72e0-414b-9cde-a60b799722a2" />


### Wallet & Payments
<img width="763" height="703" alt="image" src="https://github.com/user-attachments/assets/dfd531ac-fb26-4928-9cb3-f50f6ba01536" />


### Publish Trip
![Uploading image.png…]()



---

## 🔑 Google Maps API Key
- Autocomplete used for source/destination input.
- Prevents user errors (e.g., typos or invalid locations).
- Only allows verified locations into the database for precise querying.

---

## 🐳 Docker Setup (Recommended)

The easiest way to run the entire application is using Docker and Docker Compose.

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed on your system
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your system

### Quick Start with Docker

1. **Clone the repository**
```bash
git clone https://github.com/RISHABHKUSHWAHA7/CarPool.git
cd CarPool
```

2. **Create environment file**
```bash
cp .env.example .env
```

3. **Configure environment variables**  
   Edit the `.env` file and add your API keys and secrets:
   - MongoDB credentials
   - JWT secret
   - Google Maps API key
   - Firebase configuration
   - Razorpay credentials

4. **Build and run with Docker Compose**
```bash
docker-compose up --build
```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - MongoDB: localhost:27017

### Docker Commands

```bash
# Start all services
docker-compose up

# Start services in detached mode (background)
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f server
docker-compose logs -f client

# Rebuild containers
docker-compose up --build

# Stop and remove all containers, networks, and volumes
docker-compose down -v
```

### Docker Architecture

The Docker setup includes three services:

1. **MongoDB** - Database service running on port 27017
2. **Server** - Node.js/Express backend running on port 8000
3. **Client** - React/Vite frontend served by Nginx on port 3000

---

## ⚙️ Manual Installation Guide

If you prefer to run the application without Docker:

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file in server directory
# Add the following environment variables:
PORT=8000
MONGO_DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RESET_TOKEN_SECRET=your_reset_token_secret
FRONTEND_URL=http://localhost:3000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CORS_ORIGIN=*

# Start the server
npm run dev      # Development mode
npm start        # Production mode
```

### Frontend Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env file in client directory
# Add the following environment variables:
VITE_BACKEND_URL=http://localhost:8000
VITE_GOOGLE_MAP_API=your_google_maps_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

# Start the development server
npm run dev

# Build for production
npm run build
```

---

## 🔐 Environment Variables

See `.env.example` file for a complete list of required environment variables.

### Server Environment Variables
- `PORT` - Server port (default: 8000)
- `MONGO_DB_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `RESET_TOKEN_SECRET` - Secret key for password reset tokens
- `FRONTEND_URL` - Frontend application URL
- `RAZORPAY_KEY_ID` - Razorpay API key
- `RAZORPAY_KEY_SECRET` - Razorpay secret key
- `CORS_ORIGIN` - CORS origin configuration

### Client Environment Variables
- `VITE_BACKEND_URL` - Backend API URL
- `VITE_GOOGLE_MAP_API` - Google Maps API key
- `VITE_FIREBASE_*` - Firebase configuration
- `VITE_RAZORPAY_KEY_ID` - Razorpay public key

---


## 🗂️ Project Structure

```
CarPool/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images and media
│   │   └── App.jsx        # Main App component
│   ├── Dockerfile         # Client Docker configuration
│   └── package.json
│
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── socket/        # Socket.IO configuration
│   │   ├── databases/     # Database connection
│   │   └── server.js      # Entry point
│   ├── Dockerfile         # Server Docker configuration
│   └── package.json
│
├── screenshots/           # Application screenshots
├── docker-compose.yml     # Docker orchestration
├── .env.example           # Environment variables template
└── README.md              # Project documentation
```

---

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout

### Trips
- `GET /api/trip` - Get all trips
- `POST /api/trip` - Create new trip
- `GET /api/trip/:id` - Get trip details
- `PUT /api/trip/:id` - Update trip
- `DELETE /api/trip/:id` - Delete trip

### Bookings
- `GET /api/booking` - Get user bookings
- `POST /api/booking` - Create new booking
- `GET /api/booking/:id` - Get booking details
- `PUT /api/booking/:id` - Update booking status

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/:id` - Get user by ID

### Payments
- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify` - Verify payment

### Messages
- `GET /api/message/:conversationId` - Get messages
- `POST /api/message` - Send message

### Notifications
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id` - Mark as read

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Rishabh Kushwaha**

- GitHub: [@RISHABHKUSHWAHA7](https://github.com/RISHABHKUSHWAHA7)

---

## 🙏 Acknowledgments

- Google Maps API for location services
- Firebase for authentication
- Razorpay for payment processing
- Socket.IO for real-time features
- MongoDB Atlas for database hosting

---

## 📧 Contact

For any queries or support, please reach out:
- Create an issue in this repository

---

## 🚀 Deployment

### Using Docker in Production

For production deployment with Docker:

```bash
# Build optimized images
docker-compose build

# Run in production mode
docker-compose up -d
```

### Traditional Deployment

- **Frontend**: Deploy to Vercel, Netlify, or any static hosting
- **Backend**: Deploy to Render, Railway, or AWS EC2
- **Database**: Use MongoDB Atlas for managed database

### Current Live Deployment

- **Frontend**: https://car-pool-one.vercel.app
- **Backend**: https://carpool-xdk9.onrender.com

---

**Happy Carpooling! 🚗💨**

