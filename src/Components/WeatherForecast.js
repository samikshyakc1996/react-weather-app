import React,{useState} from 'react'
import WeatherIcon from './WeatherIcon'
import "../styles/WeatherForecast.css"
import axios from 'axios';
export default function WeatherForecast(props) {
    const [dataForecast,setDataForecast]=useState();
    const [loaded,setLoaded]=useState(false);
    function maxTemperature(){
        let temp=Math.round(dataForecast.maxTemp);
        return `${temp}°`;
    }
    function minTemperature(){
        let temp=Math.round(dataForecast.minTemp);
        return `${temp}°`;

    }
    function handleDailyForecast(response){
        console.log("response handleDailyForecast: ",response.data.daily);
        setDataForecast(
            {
               
                maxTemp: response.data.daily[0].temp.max,
                minTemp:  response.data.daily[0].temp.min
            }
        )
        setLoaded(true);

    }
   
 
    


    if(loaded){

        return (
            <div className='WeatherForecast'>
                
                <div className="WeatherForecast-day">
                    Wed
                </div>
                <div className="WeatherForecast-icon">
                    <WeatherIcon code="01d" size={52} />
        
                </div>
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperatures-max">
                         {maxTemperature()}
                    </span>
                    <span className="WeatherForecast-temperatures-min">
                        {minTemperature()}
                    </span>
                      
                </div>
               
            </div>
          )
    }
    else{
           
         // let apiKey="82f1c4607193844c69603013cf7fd3a3";
        // let apiKey2="41604d18d7fced86ba83566735f28648";
        let apiKey3="2e06fc0bb0889b11105d72fe2da61bee";
        let lat=props.lat;
        let lon=props.lon;
        let dailyForecastUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey3}&units=metric
        `;
       
        axios.get(dailyForecastUrl).then(handleDailyForecast);
        return(
        
            <p>Weather Forecast is not ready yet</p>
           
        )
    }
 
}

