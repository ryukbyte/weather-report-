
import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    if (!API_KEY) {
      setError("API key missing. Check your .env file.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city.trim(),
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      setWeather(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("City not found. Check the spelling and try again.");
      } else if (err.response?.status === 401) {
        setError("API key invalid or not activated yet.");
      } else {
        setError("Unable to fetch weather. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="weather-app">
      <h1>Weather Report</h1>
      <p>Discover the weather in your favourite city.</p>

      <form onSubmit={getWeather} className="search-form">
        <label htmlFor="city">Enter city name</label>
        <input
          id="city"
          type="text"
          placeholder="e.g. Singapore"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search Weather"}
        </button>
      </form>

      {error && <p className="error" role="alert">{error}</p>}

      {weather && (
        <section className="weather-card" aria-live="polite">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />

          <h3>{Math.round(weather.main.temp)}°C</h3>

          <p className="description">
            {weather.weather[0].description}
          </p>

          <div className="weather-details">
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind speed: {weather.wind.speed} m/s</p>
          </div>
        </section>
      )}
    </main>
  );
}

export default Weather;
