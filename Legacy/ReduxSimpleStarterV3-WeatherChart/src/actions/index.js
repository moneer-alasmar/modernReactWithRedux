import axios from 'axios';

const API_KEY = '8b77c6939fe88418a4dc3a801cc1cc0b';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}