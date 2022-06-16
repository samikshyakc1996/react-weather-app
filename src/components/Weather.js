import React, { useState }  from 'react'
import axios from 'axios';
import "../styles/Weather.css";
import Weatherinfo from './Weatherinfo';
import WeatherForecast from './WeatherForecast';
function Weather() {
 
  const [weatherData, setWeatherData]=useState({ready:false});
  const [city,setCity]=useState("New York")
  
   
    // let apiKey="41604d18d7fced86ba83566735f28648";
    let apiKey="2e06fc0bb0889b11105d72fe2da61bee";

    function handleResponse(response){
      
      setWeatherData(
        {
          ready:true,
          temperature: Math.round(response.data.main.temp),
          humidity: response.data.main.humidity,
          // iconUrl: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
          iconCode: response.data.weather[0].icon,
          wind: Math.round(response.data.wind.speed),
          city: response.data.name,
          coord:response.data.coord
        }
        
      )
      
  
    }

    function handleCityChange(event){
      setCity(event.target.value);
    }
    function handleForm(event){
      event.preventDefault();
      search();
      
    }
    function search(){
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(handleResponse);
    }
   

      if(weatherData.ready){
        return (
          <div className='Weather'>           
              <form onSubmit={handleForm}>
                  <input type="text" placeholder="Enter a city.."  onChange={handleCityChange}/>
                  <input type="submit" value="Search"  />
               </form>  
                
               <Weatherinfo apiData={weatherData}/>
               <WeatherForecast coord={weatherData.coord}/>
                                                                         
      
          </div>
        )
      }
      

  
    else{
      search();
      return(
        "Loading..."
      )
    }
 
}

export default Weather