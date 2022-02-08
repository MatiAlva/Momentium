import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {WeatherContainer, Temp, City} from './WatherStyles'

const url =  'https://api.openweathermap.org/data/2.5/weather?q=Argentina&units=imperial&appid=9e607b697db3517a13cfc91a0be6f652'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if(!data) return null

  return (
        <WeatherContainer>
            <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
            <City>Argentina, Buenos Aires</City>
        </WeatherContainer>
    )
};

export default Weather;
