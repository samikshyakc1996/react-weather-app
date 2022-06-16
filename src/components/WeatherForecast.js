import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ForecastDaily from './ForecastDaily';
import "../styles/WeatherForecast.css"


export default function WeatherForecast(props) {
  const [loaded,setLoaded]=useState(false);
  const [dailyForecast,setDailyForecast]=useState({});

  useEffect(()=>{
    setLoaded(false);
  },[props.coord])
  
  const handleDailyForecast=(response)=>{
   
    setLoaded(true);
    setDailyForecast(response.data.daily);
   
    
  }

  
  
  if(loaded){
  return (
    <div className='WeatherForecast'>   
    {dailyForecast.map((daily,index)=>(
      (index<6? 
        <div key={index}>
      <ForecastDaily dailyForecast={daily} /> </div>
      : null)
         
      
         ))} 
         
     
    </div>
  )
}

  else{
    
    // let apiKey="41604d18d7fced86ba83566735f28648";
    let apiKey="2e06fc0bb0889b11105d72fe2da61bee";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleDailyForecast);
    return "loading";
  }
}