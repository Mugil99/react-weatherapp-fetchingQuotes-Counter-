import { useState } from 'react';
import './styles.css'
function ButtonCounter(){
    let[count,setCount]=useState(0);
    function inc(){
      setCount(count++);
    }
    return(
        <>
        <p>Button is clicked {count} times</p>
        <button onClick={inc}>Click Me</button>
        </>
    )
}
export default ButtonCounter;