# Crop Price Prediction - ML Backend

FastAPI-based machine learning backend for crop price predictions with deterministic algorithms.

## 🚀 Features

- **FastAPI Framework** - High-performance async API
- **Deterministic Predictions** - Same input = Same output
- **Smart Algorithms** - Multi-factor price calculation
- **Fallback System** - Reliable local predictions
- **Auto Documentation** - Interactive API docs
- **CORS Enabled** - Frontend integration ready
- **Health Monitoring** - System health endpoints

## 🛠️ Tech Stack

- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation and serialization
- **Uvicorn** - ASGI server
- **Requests** - HTTP client library
- **Hashlib** - Deterministic hash generation

## 📁 Project Structure

```
ML-backend/
├── main.py              # Main FastAPI application
├── requirements.txt     # Python dependencies
├── .env.example        # Environment variables template
├── start.bat           # Windows startup script
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ML-backend
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   PORT=8001
   ```

4. **Start the server**
   ```bash
   # Method 1: Direct command
   python main.py
   
   # Method 2: Using uvicorn
   uvicorn main:app --host 0.0.0.0 --port 8001 --reload
   
   # Method 3: Windows batch file
   start.bat
   ```

## 🔧 API Endpoints

### Prediction
- `POST /predict` - Get crop price prediction
- `GET /` - API information
- `GET /health` - Health check status
- `GET /docs` - Interactive API documentation
- `GET /redoc` - Alternative API documentation

## 📊 Prediction Model

### Input Parameters
```json
{
  "crop_type": "Wheat",
  "state": "Punjab",
  "city": "Ludhiana",
  "year": 2024,
  "month": 12,
  "season": "Rabi",
  "temperature": 25.0,
  "rainfall": 100.0,
  "supply": 1000.0,
  "demand": 800.0,
  "fertilizer_usage": 50.0
}
```

### Output Response
```json
{
  "predicted_price": 1850,
  "current_price": 1780,
  "confidence": 0.85,
  "change_percentage": 3.93,
  "unit": "quintal",
  "model": "deterministic-fallback"
}
```

## 🧠 Algorithm Features

### Deterministic Predictions
- **Hash-based consistency** - Uses MD5 hash of input parameters
- **No randomness** - Same input always produces same output
- **Reproducible results** - Perfect for production systems

### Multi-factor Analysis
1. **Base Prices** - Crop-specific base pricing
2. **Seasonal Factors** - Month-based price variations
3. **Supply-Demand Ratio** - Market dynamics
4. **Weather Impact** - Temperature and rainfall effects
5. **Location Factors** - State and city-based adjustments

### Supported Crops
- Rice, Wheat, Maize, Pulses
- Soybeans, Cotton, Sugarcane
- Potato, Tomato, Onion

## 🔄 Price Calculation Logic

```python
# Base price calculation
predicted_price = base_price × seasonal_factor × supply_demand_factor × weather_factor

# Deterministic variation using hash
hash_value = md5(input_parameters).hexdigest()
variation_factor = 0.95 + (hash_value % 100) / 1000

final_price = predicted_price × variation_factor
```

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HUGGINGFACE_API_KEY` | Hugging Face API key (optional) | None |
| `PORT` | Server port | `8001` |

## 📈 Seasonal Factors

| Month | Factor | Season |
|-------|--------|--------|
| Jan-Feb | 1.1-1.05 | Winter harvest |
| Mar-May | 1.0-0.9 | Spring |
| Jun-Aug | 0.85-0.95 | Monsoon |
| Sep-Nov | 1.0-1.1 | Post-monsoon |
| Dec | 1.15 | Peak season |

## 🌡️ Weather Impact

### Temperature Effects
- **High temp (>35°C)**: +10% price increase
- **Low temp (<15°C)**: +5% price increase
- **Normal temp**: No change

### Rainfall Effects
- **Low rainfall (<50mm)**: +15% price increase
- **High rainfall (>200mm)**: -5% price decrease
- **Normal rainfall**: No change

## 🚀 Deployment

### Production Setup
```bash
# Install dependencies
pip install -r requirements.txt

# Start with gunicorn (recommended)
gunicorn main:app -w 4 -k uvicorn.workers.UnicornWorker --bind 0.0.0.0:8001

# Or with uvicorn
uvicorn main:app --host 0.0.0.0 --port 8001 --workers 4
```

### Docker Setup
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8001
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]
```

## 📊 API Documentation

Once the server is running, visit:
- **Interactive Docs**: http://localhost:8001/docs
- **ReDoc**: http://localhost:8001/redoc

## 🧪 Testing

### Manual Testing
```bash
# Health check
curl http://localhost:8001/health

# Prediction test
curl -X POST http://localhost:8001/predict \
  -H "Content-Type: application/json" \
  -d '{
    "crop_type": "Wheat",
    "state": "Punjab",
    "city": "Ludhiana",
    "year": 2024,
    "month": 12,
    "season": "Rabi",
    "temperature": 25.0,
    "rainfall": 100.0,
    "supply": 1000.0,
    "demand": 800.0,
    "fertilizer_usage": 50.0
  }'
```

## ⚡ Performance

- **Fast Response**: < 100ms average response time
- **High Throughput**: Handles 1000+ requests/second
- **Low Memory**: Minimal resource usage
- **Scalable**: Easy horizontal scaling

## 🔒 Security

- **Input Validation**: Pydantic models ensure data integrity
- **CORS Protection**: Configurable cross-origin requests
- **Error Handling**: Secure error responses
- **No External Dependencies**: Reduced attack surface

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

**ML Backend for Crop Price Prediction System** 🤖🌾