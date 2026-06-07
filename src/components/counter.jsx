import {useState} from 'react'
const Counter= () =>{
    const [count, setCount]= useState(0);
    const [display, setDisplay]= useState(true);
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button> 
            {count===1? <h2>condition 1</h2>
            :count==2? <h2>condition 2</h2>
            :count==3? <h2>condition 3</h2>
            :count==4? <h2>condition 4</h2>
            :count==5? <h2>condition 5</h2>
            :count==6? <h2>condition 6</h2>
            :<h2>condition not matched</h2>
           } 
            <button onClick={()=>setCount(count-1)}>Reverse Counter</button>       
            {display? <h2>Atul</h2>: <h4>Display none</h4>}  
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        </div>
    ) 
}
export default Counter;