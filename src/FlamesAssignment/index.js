import { useState } from 'react';
import './styles.css'
function FlamesAssignment(){
    var[name1,setName1]=useState("");
    var[name2,setName2]=useState("");
    var[op,setOp]=useState(0);
    var[opobj,setOpobj]=useState({ 0: "Siblings",
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
  });
   
function calculate(){
    var obj1={};
    var obj2={};
    var result={};
   for(let i=0;i<name1.length;i++){
       if(obj1[name1[i]]){
        obj1[name1[i]]+=1;
       }else{
        obj1[name1[i]]=1;
       }
   }

   for(let i=0;i<name2.length;i++){
    if(obj2[name2[i]]){
     obj2[name2[i]]+=1;
    }else{
     obj2[name2[i]]=1;
    }
}
    //Object.keys(obj)==for(i in obj)--->
    // not exactly but somewhat similar l.h.s gives array
    // r.h.s iterates through keys in object
     for(let i in obj1){
        if(Object.keys(obj2).includes(i)){
           result[i]= obj1[i]+obj2[i]-1;
        }
     }
    console.log(obj1,obj2,result,name1,name2)
    var sum=0;
    for(let i in result){
        sum+=result[i];
    }
    setOp(sum%6);
    
}
function clear(){
    setName1("");
    setName2("");
}  

return(
<><input type='text' value={name1} placeholder='Enter first name' onChange={(e)=>{setName1(e.target.value)}}></input>
<input type='text' value={name2} placeholder='Enter second name' onChange={(e)=>{setName2(e.target.value)}}></input> 
<button onClick={calculate}>Calculate Relationship Future</button>
<button onClick={clear}>Clear</button>
<h3>{opobj[op]}</h3></>

);
}
export default FlamesAssignment;