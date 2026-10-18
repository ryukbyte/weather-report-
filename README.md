# 🌦️ Weather Report App

A responsive weather application built with React that allows users to search for any city and view its current weather conditions using the OpenWeather API.

## ✨ Features

- Search for weather by city name
- Display current temperature in Celsius
- View weather conditions and weather icons
- Display feels-like temperature, humidity, and wind speed
- Handle invalid city names and API errors
- Responsive layout for desktop and mobile devices

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Axios
- OpenWeather API
- HTML5
- CSS3
- React Hooks (`useState`)

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- An OpenWeather API key

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-report
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your API key:

   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser.

## 🌐 API Reference

This application uses the OpenWeather Current Weather API to retrieve weather information based on the user's city search.

API endpoint:

`https://api.openweathermap.org/data/2.5/weather`

The request includes the city name, API key, and metric units for Celsius temperature.

## 🔐 Environment Variables

The API key is configured through a `.env` file.

**Important:** Never commit your real API key to GitHub. Keep `.env` in `.gitignore`. Since React frontend environment variables can be exposed in the browser bundle, use a backend proxy if you deploy the application and need to protect the key.

## 📱 Responsive Design

The application uses CSS Flexbox, Grid, and media queries to provide a user-friendly experience across different screen sizes.

## 🎯 Project Objective

The objective of this project is to practice React component development, state management, API integration using Axios, error handling, and responsive web design.

## 👩‍💻 Author

Vidula Saravanan

## 📄 License

This project was created for educational purposes.
