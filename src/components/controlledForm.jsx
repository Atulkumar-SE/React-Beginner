import { useState } from "react";

function ControlledForm(){
    const [userName, setUserName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
return(
    <form>
    <h1>Login Form (Controlled Form)</h1>
    <div>
        <label>UserName: </label>
        <input type="text" value={userName} placeholder="Enter your name" onChange={(e)=>setUserName(e.target.value)}/>
    </div><br/><br/>
    <div>
        <label>Email: </label>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div><br/><br/>
    <div>
        <label>Password: </label>
        <input type="password" placeholder="Enter strong password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div><br/><br/>
    <button>Login</button>
    <button onClick={()=>{setUserName("")}}>Clear</button><br/><br/><br/>
    <div style={{border:"2px solid green", padding:"10px"}}>
        {userName}<br/>
        {email}<br/>
        {password}
    </div>
    </form>
)
}

export default ControlledForm;