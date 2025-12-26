# Crop Price Prediction System

A comprehensive MERN stack application with FastAPI ML backend for predicting crop prices using machine learning algorithms.

## 🚀 Features

- **User Authentication** - JWT-based secure login/register
- **Price Prediction** - ML-powered crop price forecasting
- **Real-time Dashboard** - Interactive charts and analytics
- **Location-based** - All Indian states and major cities
- **Smart Alerts** - Price change notifications
- **Crop Management** - Track and manage your crops
- **Responsive Design** - Works on all devices

## 🏗️ Architecture

```
Frontend (React/Vite) → Backend (Node.js/Express) → ML Backend (FastAPI) → Predictions
                     ↓
                MongoDB Database
```

## 📁 Project Structure

```
crop-price-prediction/
├── frontend/          # React frontend with Vite
├── backend/           # Node.js/Express API server
├── ML-backend/        # FastAPI ML prediction service
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 19** with Hooks
- **Vite** for fast development
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Recharts** for data visualization
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** authentication
- **Bcrypt** for password hashing
- **Zod** for validation
- **Node-cron** for scheduled tasks

### ML Backend
- **FastAPI** for high-performance API
- **Deterministic ML** predictions
- **Hugging Face** integration (optional)
- **Smart fallback** system

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.8+
- MongoDB

### 1. Clone Repository
```bash
git clone <repository-url>
cd crop-price-prediction
```

### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secrets
npm run dev
```

### 3. Setup ML Backend
```bash
cd ML-backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your Hugging Face API key (optional)
python main.py
```

### 4. Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your backend URL
npm run dev
```

### 5. Access Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **ML API**: http://localhost:8001
- **ML API Docs**: http://localhost:8001/docs

## 📝 Environment Variables

### Backend (.env)
```env
JWT_SECRET=your_jwt_secret_key_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key_here
MONGODB_URI=mongodb://localhost:27017/crop_price_prediction
PYTHON_API_BASE_URL=http://localhost:8001
```

### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:5000
```

### ML Backend (.env)
```env
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
PORT=8001
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Predictions
- `POST /api/predictions` - Get crop price prediction
- `GET /api/crop-prices` - Get historical prices
- `GET /api/locations` - Get available locations

### ML API
- `POST /predict` - Direct ML prediction
- `GET /health` - Health check
- `GET /docs` - API documentation

## 🌾 Supported Crops

Rice, Wheat, Maize, Soybean, Cotton, Potato, Onion, Tomato, Sugarcane, Pulses

## 🗺️ Supported Locations

All 28 Indian states with major cities and agricultural hubs.

## 🤖 ML Model Features

- **Deterministic predictions** - Same input = Same output
- **Multi-factor analysis** - Weather, supply-demand, seasonal factors
- **Fallback system** - Reliable local predictions
- **Smart algorithms** - Hash-based consistent results

## 🔒 Security Features

- JWT authentication with refresh tokens
- Password hashing with bcrypt
- Input validation with Zod
- CORS protection
- Rate limiting ready

## 📊 Dashboard Features

- Real-time price predictions
- Interactive charts
- Crop management
- Price alerts
- Historical data analysis

## 🚀 Deployment

### Production Build
```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && npm start

# ML Backend
cd ML-backend && python main.py
```

### Docker (Optional)
```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Arvind Meena**
- Email: avmeena9685@gmail.com
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- Hugging Face for ML model hosting
- MongoDB for database solutions
- React team for amazing frontend framework
- FastAPI for high-performance ML API

---

**Happy Farming! 🌾**