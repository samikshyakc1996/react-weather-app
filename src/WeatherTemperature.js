import React, { useState } from 'react'
import "./styles/WeatherTemperature.css"
export default function WeatherTemperature(props) {
    const [unit,setUnit]=useState("celsius");
    

    function displayFahrenheit(){
        let fahrenheitTemp=Math.round((props.celsius * 9/5) + 32);
        return fahrenheitTemp;
    }
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");       
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
        return props.celsius;
        
    }
    if(unit==="celsius")
    {
        return (
            <div className='WeatherTemperature'>
                 <span className='temperature'>{props.celsius}
                    </span>
                    <span className="temperature-unit">
                      <div className="celsius-unit">
                        °C
                      </div>|
                      <div className="fahrenheit-unit">
                        <a href="/" onClick={showFahrenheit}>°F</a>
                      </div>            
                    </span>
            </div>
          )
    }
    else if(unit==="fahrenheit"){
        return (
            <div className='WeatherTemperature'>
                 <span className='temperature'>{displayFahrenheit()}
                    </span>
                    <span className="temperature-unit">
                      <div className="celsius-unit">
                      <a href="/" onClick={showCelsius}>°C</a>
                        
                      </div>|
                      <div className="fahrenheit-unit">
                      °F
                      </div>            
                    </span>
            </div>
          )
        
    }
 
}

