import './styles.css'
function PassingHandlerProp(){
    var flag="";
    function blues(){
       flag="skyblue"
      //  console.log(flag);
    }
    function oranges(){
        flag="orange"
     }
     function greens(){
        flag="green"
     }
     
return(
    <><button className='btn' onClick={blues} style={{backgroundColor:"skyblue"}}>Blue</button>
    <button className='btn' onClick={oranges} style={{backgroundColor:"orange"}}>Orange</button>
    <button className='btn' onClick={greens} style={{backgroundColor:"green"}}>Green</button>
    <div className='container'>
    <div className='box box1' onClick={(e)=>{e.target.style.backgroundColor=flag}}>1</div>
    <div className='box box2' onClick={(e)=>{e.target.style.backgroundColor=flag}}>2</div>
    <div className='box box3' onClick={(e)=>{e.target.style.backgroundColor=flag}}>3</div>
    </div>
    </>
)
}
export default PassingHandlerProp;