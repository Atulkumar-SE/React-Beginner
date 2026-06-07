import React, { useState } from 'react'

export default function Checkbox() {
    const [skills,setSkills]=useState([]);
    const handleSkills=(e)=>{
        console.log(e.target.value, e.target.checked)
        if(e.target.checked){
            setSkills([...skills,e.target.value]);
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)]);
        }
    }
  return (
    <div>
        <h1>Check Box</h1>
        <div>
        <input type="checkbox" id='js' value='js' onClick={handleSkills}/>
        <label htmlFor='js'>JavaScript</label>
        </div>
         <div>
        <input type="checkbox" id='php' value='php' onClick={handleSkills}/>
        <label htmlFor='php'>PHP</label>
        </div> <div>
        <input type="checkbox" id='react' value='react' onClick={handleSkills}/>
        <label htmlFor='react'>React.js</label>
        </div> <div>
        <input type="checkbox" id='java' value='java' onClick={handleSkills}/>
        <label htmlFor='java'>Java</label>
        </div> <div>
        <input type="checkbox" id='python' value='python' onClick={handleSkills}/>
        <label htmlFor='python'>Python</label>
        </div>
        <h3>{skills.toString()}</h3>
    </div>
  )
}
