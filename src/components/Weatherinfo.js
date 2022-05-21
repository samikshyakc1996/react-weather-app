import React from 'react'
import Getdate from './Getdate'

export default function Weatherinfo(props) {
 console.log("response from weatherinfo",props.apiData);
  return (
    
    <div className='Weatherinfo'>
         <div className="weather-summary">
                      <div className="weather-details part-one">
                          <img src={props.apiData.iconUrl} alt="icon" />
                          <span className='temperature'>{props.apiData.temperature}</span>
                          <span className="temperature-unit">
                            <div className="celsius-unit">
                              <a href="#">°C</a>
                            </div>|
                            <div className="fahrenheit-unit">
                            <a href="#">°F</a>
                            </div>
                           

                            </span>
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

