import React from "react";

export default function Getdate(){
    let date=new Date();
    let day=date.getDay();
    let time=`${date.getHours()}:${date.getMinutes()}`
    let dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day=dayArr[day];


    return(
        <div>{day} {time}</div>
    )
}