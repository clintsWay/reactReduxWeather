import axios from 'axios';
const { key } = require('../../hiddenFile');
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    var encodedLocation = encodeURIComponent(city);
    const url = `${ROOT_URL}&q=${encodedLocation}&units=imperial`;
    const request = axios.get(url);

    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
