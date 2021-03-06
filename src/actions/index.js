
import axios from 'axios';

 const API_KEY = '698884a1752ef28c4f9e598f828fa25a';

 export const FETCH_WEATHER = 'FETCH_WEATHER';
 const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

 export function fetchWeather(city){
     const URL = `${ROOT_URL}&q=${city},us`;
     const request = axios.get(URL);

     return{
         type: FETCH_WEATHER,
         payload: request
     };
 }