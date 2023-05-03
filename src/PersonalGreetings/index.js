import { useState } from 'react';
import './styles.css';
function PersonalGreetings(){
    var[message,setMessage]=useState("");
    //if giving seperate function in onChange and setting name O/P => mmumugmugimugil

    return(
        <>
        <input onChange={(e)=>{setMessage(e.target.value)}}></input><br></br>  
        <h2>{"Hello "+message+" !"}</h2>
        </>
    )
}
export default PersonalGreetings;