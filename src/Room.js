import React, {useState} from 'react';
import './Room.css';
function Room() {
    let [isLit,setLit]=useState(false);
    let [age,setAge]=useState(25);
  return (
    <div className={"room "+(isLit?"lit":"dark")}>
      This Room is {isLit? "lit" :"dark"} 
      <br/>
      Age:{age};
      <br/>
      <br/>
      <button onClick = {()=>setLit(!isLit)}>Flip</button>
      <br/>
      <br/>
      <button onClick={()=>{console.log("Increase Age");
                
                setAge(++age);}}>Increase Age</button>
    </div>
  );
}

export default Room;