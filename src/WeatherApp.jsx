
import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import MapBox from "./Mapbox";
import './App.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 44.05,
        humidity: 70,
        temp: 33.05,
        tempMax: 33.05,
        tempMin: 33.05,
        weather: "haze",
        lat: 28.6139, // Default coordinates for Delhi
        lon: 77.2090, // Default coordinates for Delhi
    });

    let updateInfo = (result) => {
        console.log(result.lat);
        console.log(result.lon);
        setWeatherInfo({
            ...result,
            lat: result.lat,
            lon: result.lon,
        });
    }

    return (
        <div className="weatherApp-container">
            <div className="weather-info-container">
        
                <h1>Weather App</h1>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
            <div className="map-container">
                <MapBox lat={weatherInfo.lat} lon={weatherInfo.lon} />
            </div>
        </div>
        
        
    );
}
