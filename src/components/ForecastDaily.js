import React from 'react'
import WeatherIcon from './WeatherIcon';
import "../styles/ForecastDaily.css"

function ForecastDaily(props) {
 

  

    const maxTemp=(temp)=>{
        return `${Math.round(temp)}°`;
    }
    const minTemp=(temp)=>{
        return `${Math.round(temp)}°`;
    }

    const convertDay=(dt)=> {
        let dayToday=new Date( dt*1000);
        let days=["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
        let day=dayToday.getDay();
       
        return days[day];
      }

  return (
    <div className='ForecastDaily'>
        <div className='day'>{convertDay(props.dailyForecast.dt)}</div>

        <div className='icon'><WeatherIcon code={props.dailyForecast.weather[0].icon} size={50}/> 
            <div></div>
             
              <span className='maxTemp'>{maxTemp(props.dailyForecast.temp.max)} </span>
              <span className='minTemp'>{minTemp(props.dailyForecast.temp.min)} </span>
            </div>
    </div>
  )
}


export default ForecastDaily;