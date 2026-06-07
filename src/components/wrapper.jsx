function Wrapper({children, color="Red"}){
    return(
        <div style={{color:`${color}`, border:"3px solid green", padding:"10px",marginTop:"10px"}}>
            {children }
        </div>
    )
}

export default Wrapper;