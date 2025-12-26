// src/services/huggingFaceService.js
const axios = require('axios');
const { config } = require('../config/config');

class HuggingFaceService {
  constructor() {
    this.mlBackendUrl = process.env.PYTHON_API_BASE_URL || 'http://localhost:8001';
    this.timeout = 30000;
  }

  async getCropPricePrediction(predictionData) {
    try {
      console.log('Sending request to ML Backend:', predictionData);
      
      const payload = this.preparePayload(predictionData);
      
      const response = await axios.post(
        `${this.mlBackendUrl}/predict`,
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: this.timeout
        }
      );

      return this.formatResponse(response.data, predictionData);
    } catch (error) {
      console.error('ML Backend Service Error:', error);
      throw new Error(`Failed to get prediction: ${error.message}`);
    }
  }

  preparePayload(data) {
    return {
      crop_type: data.cropName || data.croptype,
      state: data.state,
      city: data.city || data.location,
      year: data.year || new Date().getFullYear(),
      month: data.month || new Date().getMonth() + 1,
      season: data.season || this.getSeason(data.month),
      temperature: data.temperature || data.temp || 25,
      rainfall: data.rainfall || 100,
      supply: data.supply || 1000,
      demand: data.demand || 1000,
      fertilizer_usage: data.fertilizerUsage || data.fertilizerused || 50
    };
  }

  getSeason(month) {
    if (month >= 3 && month <= 5) return 'Spring';
    if (month >= 6 && month <= 8) return 'Summer';
    if (month >= 9 && month <= 11) return 'Autumn';
    return 'Winter';
  }

  formatResponse(response, inputData) {
    return {
      success: true,
      data: {
        cropName: inputData.cropName || inputData.croptype,
        location: `${inputData.city || inputData.location}, ${inputData.state}`,
        currentPrice: response.current_price,
        predictedPrice: response.predicted_price,
        changePercentage: response.change_percentage,
        confidence: response.confidence,
        unit: response.unit,
        model: response.model,
        lastUpdated: new Date().toISOString(),
        metadata: {
          year: inputData.year || new Date().getFullYear(),
          month: inputData.month || new Date().getMonth() + 1,
          season: inputData.season || this.getSeason(inputData.month),
          temperature: inputData.temperature || inputData.temp,
          rainfall: inputData.rainfall,
          supply: inputData.supply,
          demand: inputData.demand
        }
      }
    };
  }

  async testConnection() {
    try {
      const response = await axios.get(`${this.mlBackendUrl}/health`, { timeout: 5000 });
      return response.status === 200;
    } catch (error) {
      console.error('ML Backend connection test failed:', error);
      return false;
    }
  }
}

module.exports = new HuggingFaceService();