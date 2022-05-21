import React from "react";

export default function Getdate(){
    let date=new Date();
    let day=date.getDay();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    if(hours<10){
        hours=`0${hours}`;
    }
    if(minutes<10){
        minutes=`0${minutes}`;
    }
    let time=`${hours}:${minutes}`
    let dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day=dayArr[day];


    return(
        <div>{day} {time}</div>
    )
}