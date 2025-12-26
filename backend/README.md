# Crop Price Prediction - Backend API

Node.js/Express backend server for the Crop Price Prediction System.

## 🚀 Features

- **JWT Authentication** - Secure login/register system
- **MongoDB Integration** - User and crop data management
- **Price Prediction API** - Connects to ML backend
- **User Management** - Profile, preferences, alerts
- **Crop Management** - Track user's managed crops
- **Price Alerts** - Automated notifications with cron jobs
- **Input Validation** - Zod schema validation
- **Error Handling** - Comprehensive error management

## 🛠️ Tech Stack

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Zod** for input validation
- **Node-cron** for scheduled tasks
- **Axios** for HTTP requests

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── services/       # Business logic services
│   ├── utils/          # Utility functions
│   └── app.js          # Main application file
├── .env.example        # Environment variables template
├── package.json        # Dependencies and scripts
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   JWT_SECRET=your_jwt_secret_key_here
   JWT_REFRESH_SECRET=your_jwt_refresh_secret_key_here
   MONGODB_URI=mongodb://localhost:27017/crop_price_prediction
   PYTHON_API_BASE_URL=http://localhost:8001
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/profile` - Get user profile

### Predictions
- `POST /api/predictions` - Get crop price prediction

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Crop Management
- `GET /api/managed-crops` - Get user's managed crops
- `POST /api/managed-crops` - Add new managed crop
- `PUT /api/managed-crops/:id` - Update managed crop
- `DELETE /api/managed-crops/:id` - Delete managed crop

### Locations
- `GET /api/locations` - Get available states and cities

### User Preferences
- `GET /api/user-preferences` - Get user preferences
- `PUT /api/user-preferences` - Update user preferences

## 📊 Database Models

### User Model
- Authentication details
- Profile information
- Managed crops
- Alert preferences
- Location preferences

### Crop Price Model
- Historical price data
- Market information
- Location-based prices

## 🔒 Security Features

- **JWT Authentication** with access and refresh tokens
- **Password Hashing** using bcrypt
- **Input Validation** with Zod schemas
- **CORS Protection** configured
- **Error Handling** middleware
- **Rate Limiting** ready (can be enabled)

## 🔄 Cron Jobs

- **Price Alerts** - Automated price change notifications
- **Data Cleanup** - Periodic cleanup of old data
- **Health Checks** - System health monitoring

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `JWT_SECRET` | JWT signing secret | Required |
| `JWT_REFRESH_SECRET` | JWT refresh token secret | Required |
| `MONGODB_URI` | MongoDB connection string | Required |
| `PYTHON_API_BASE_URL` | ML backend URL | `http://localhost:8001` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |

## 🚀 Deployment

### Production Setup
```bash
# Install dependencies
npm ci --only=production

# Start server
npm start
```

### Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run with coverage
npm run test:coverage
```

## 📝 API Documentation

The API follows RESTful conventions with JSON responses:

```json
{
  "success": true,
  "data": {
    // Response data
  }
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message",
  "details": "Additional error details"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨💻 Author

**Arvind Meena**
- Email: avmeena9685@gmail.com

---

**Backend API for Crop Price Prediction System** 🌾