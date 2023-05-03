import { useState } from 'react';
import './styles.css'
function WeatherAssignment(){
  let lat=0;
  let long=0;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
             lat=position.coords.latitude;
             long=position.coords.longitude;
             console.log(lat,long);
        })
    }
    let [temp,setTemp]=useState(0);
    const apiKey = '1f83a6aac95ca415fc0dba306cc1227e';
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}`;
   fetch(apiUrl).then(res=> res.json()).then((data)=>{
    setTemp(data.main.temp)
    console.log(temp);
   })
 return(<>
 Weather Assignment
 <h3 className={temp<301?"blue":"red"}>{temp}</h3>
 </>)
}
export default WeatherAssignment;