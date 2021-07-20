import { useEffect, useState } from "react";
import { WeatherForecast } from "../../model/interfaces";
import { fetchAllForecast } from "../../services/QuotesService";


function GetWeatherForecast(){

    const [WeatherForecastArray, setWeatherForecast] = useState<WeatherForecast[]>([]);

    useEffect(() => {
        fetchAllForecast().then((data) => {
            setWeatherForecast(data);
        })
    }, []);

    return (
        <div className="ForecastContainer">
            <h3>Weather Forecast</h3>
                <ul>
                    {WeatherForecastArray.map((weather, index) => {
                        <li key={`${weather.detailedForecast}-${weather.icon}-${weather.name}-${weather.temperature}-${index}`}>
                            <header>{weather.name}</header>
                            <p>Tempature: {weather.temperature} F</p>
                            <img src={weather.icon} alt="weather icon"/>
                            <p>{weather.detailedForecast}</p>
                        </li>
                    })}
                </ul>
        </div>
    );
}


export default GetWeatherForecast;