import React, { useState } from "react";

function ChangeEvent(){
    const [val, setVal]=useState("Atul");
    const [val1, setVal1] = useState("");
    const [val2, setVal2]=useState("");
    const [val3, setVal3]=useState("");

    function consoleFxn(){
          console.log(val1, val2, val3)
       
    }
    return(
<div>
    <h1>Change Event</h1>
    <input type="text" value={val}placeholder="Enter your name" onChange={(event)=>setVal(event.target.value)}/>
    <h3>{val}</h3>
<button onClick={()=>setVal("")}>Clear</button>
<br/>

<container>
    <input type="text" value={val1} Placeholder="input 1..." onChange={(e)=>setVal1(e.target.value)}/>
    <input type="text" value={val2} Placeholder="input 2..." onChange={(e)=>setVal2(e.target.value)}/>
    <input type="text" value={val3} Placeholder="input 3..." onChange={(e)=>setVal3(e.target.value)}/>
    <button onClick={()=>consoleFxn()}>Console all 3 input value</button>
</container>
</div>
    )
}

export default ChangeEvent;