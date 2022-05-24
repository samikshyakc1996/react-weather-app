import React from 'react'
import Getdate from './Getdate'
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
export default function Weatherinfo(props) {
  return (
    
    <div className='Weatherinfo'>
     <div className="weather-summary">
        <div className="weather-details part-one">
            <WeatherIcon code={props.apiData.iconCode}/>             
            <WeatherTemperature celsius={props.apiData.temperature}/>
            <div className="weather-details-phw">
                
                <div>Humidity:{props.apiData.humidity}%</div>
                <div>Wind: {props.apiData.wind} km/hr</div>
            </div>
        </div>
        <div className="weather-details part-two">
            <div className="city-name">{props.apiData.city}</div>
            <div className="date">
              <Getdate/>
            </div>
            <div className="description">{props.apiData.description}</div>
        </div>               
      </div>        
    </div>
  )

}

