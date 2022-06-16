import React, { useState } from 'react'
import axios from 'axios';
import WeatherIcon from './WeatherIcon';
import "../styles/WeatherForecast.css"
export default function WeatherForecast(props) {

  const [loaded,setLoaded]=useState(false);
  const [dailyForecast,setDailyForecast]=useState({});
  const handleDailyForecast=(forecasts)=>{
    const dailyForecast=forecasts.data.daily;
    console.log(dailyForecast);
    const convertDay=(dt)=> {
      let dayToday=new Date( dt*1000);
      let days=["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
      let day=dayToday.getDay();
      console.log("day: ",day);
      return days[day];
    }
    setLoaded(true);

    setDailyForecast({
      day:convertDay(dailyForecast[0].dt),
      maxTemp:Math.round(dailyForecast[0].temp.max),
      minTemp:Math.round(dailyForecast[0].temp.min),
      iconCode:dailyForecast[0].weather[0].icon
      
    })
  }

  
  
  if(loaded){
  return (
    <div className='WeatherForecast'>
        <div className="forecast-day">
            <div>{dailyForecast.day}</div>
            <div className='icon'><WeatherIcon code={dailyForecast.iconCode} size={50}/> 
            <div></div>
              <span className='maxTemp'>{dailyForecast.maxTemp}° </span>
              <span className='minTemp'>{dailyForecast.minTemp}°</span>
            </div>
        </div>
    </div>
  )
}

  else{
    
    console.log("props.coord",props.coord);
    // let apiKey="41604d18d7fced86ba83566735f28648";
    let apiKey="2e06fc0bb0889b11105d72fe2da61bee";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleDailyForecast);
    return "loading";
  }
}