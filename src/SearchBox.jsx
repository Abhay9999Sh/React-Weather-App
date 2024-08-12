import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { API_KEY } from '../config';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
       
        let result = {
            city: city,  // first city = obj element, second city = state variable 
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            lat: jsonResponse.coord.lat,
            lon: jsonResponse.coord.lon
        };
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
    }
     
    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        console.log(newInfo);
        updateInfo(newInfo);
        setError(false);
        } catch(err) {
            console.log("error is occuring", err);
            setError(true);
        }
    }

    return (
    <div className='search'>
        <form onSubmit={handleSubmit}>
        <TextField 
            id="outlined-basic" 
            label="City Name"
            value={city}
            onChange={handleChange}
            variant="outlined" required 
        />
        <Button variant="contained"  type='submit'>Search</Button>
        </form>
        {error && <p style={{color: "red", fontSize: "2rem"}}>No Such Place Exists!</p> }
    </div>
    )
}

