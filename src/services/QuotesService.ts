import axios, { AxiosResponse } from 'axios';
import { Quotes, WeatherForecast } from '../model/interfaces';


const quotesApiUrl: string = 'https://grandcircusco.github.io/demo-apis/quotes.json';
const forecastApiUrl: string = 'https://api.weather.gov/gridpoints/DTX/65,33/forecast';

export function fetchAllQuotes(): Promise<Quotes[]> {
    return axios.get(quotesApiUrl).then((response) => {
        return response.data;
    })
}

export function fetchAllForecast(): Promise<WeatherForecast[]> {
    return axios.get(forecastApiUrl).then((response) => {
        return response.data.properties.periods;
    })
}


console.log(fetchAllForecast());