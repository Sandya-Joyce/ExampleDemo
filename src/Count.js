//counter , two buttons - +
import React, { useEffect, useState } from "react"; 
import Example from "./Example";


function Count(){
const[count,setCount]=useState(0);


return(
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <Example message="hello"/>
    </div>
)

}
export default Count;