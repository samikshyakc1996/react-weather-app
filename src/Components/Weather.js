import React, { useState } from "react";
import axios from "axios";
import "../styles/Weather.css"
import Getdate from "./Getdate";
export default function Weather(){

    const [city,setCity]=useState("New york");
    // const [output,setOutput]=useState();
    const [result,setResult]=useState("");
    const [weeklyForecast,setWeeklyForecast]=useState(null);
    let apiKey="82f1c4607193844c69603013cf7fd3a3";


    function displayWeeklyForecast(response){
       
        let weeklyForecast=response.data.daily;   
        let actualOutput= weeklyForecast.map(function(daily,index){
            // console.log("daily forecast",daily);
            console.log("index is:",index);
            let iconUrl=`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`;
            let outputData="";
            if(index<6){
             outputData=
            <>
            <div className="col-sm-2">
                {Math.round(daily.temp.max)}
               <div> <img src={iconUrl} alt="icon" /></div>
                </div>
           
            </>
        }
            return(
               <div key={index}>
                    {outputData}
                    </div>
                
            );
            
       }) 
       setWeeklyForecast(
           <div className="wrapper">
               {actualOutput}
           </div>
       );
        
        
        
    }
    function displayWeather(response){
        console.log("response",response);
        let temperature=Math.round(response.data.main.temp);
        let iconUrl=`http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`;
        // setOutput(`The temperature of ${city} is ${temperature}℃`)
        setResult(
            <>
                <div className="weather-summary">
                    <p className="city-name">{city}</p>
                    <Getdate/>
                    <div className="description">{response.data.weather[0].description}</div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={iconUrl} alt="icon" />
                        <span>{temperature}℃</span>
                    </div>
                    <div className="col-sm-6">
                            <div>Precipitation:{response.data.main.humidity}%</div>
                            <div>Wind: {response.data.wind.speed} km/hr</div>
                    </div>
                    

                </div>
                
            </>
    );
    let lat=response.data.coord.lat;
    let lon=response.data.coord.lon;
    
    let weeklyForecastUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(weeklyForecastUrl).then(displayWeeklyForecast);
    }
    function handleChange(e){
        setCity(e.target.value);
    }
    function handleForm(event){
        event.preventDefault();
       
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(displayWeather);
       
    }
     
    return(
        <div className="Weather">
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Enter a city.." onChange={handleChange} />
                <input type="submit" value="Search"  />
            </form>
        {/* {output} */}
        {result}
        {weeklyForecast}
        </div>
    )
}