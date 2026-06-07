    function add(a,b){
        alert(`add two number Outer fxn: ${a+b}`);
      
        
    }

function Testing1(){
    const img_url = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
    let host = window.location.host;
    let a = 10;
    let b = 20;
    const fruitArray = ['Apple', 'Banana', 'Cherry'];
    const vehicleObject = {
        "car": "Toyota",
        "color": "Red",
        "year": 2020,
        "Types": ["Sedan", "SUV", "Sports"]  
    }

    // function add(a,b){
    //     alert(`add two number: ${a+b}`);
      
        
    // }
    return(
        <div>
            <h1>Anil Sidhu</h1>
            <img src ={img_url} alt="Image" className="Photo"/>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>{host}</li>
                <li>{a+b}</li>
                {/* <li>{add(2,5)}</li> */}
            </ul>
            <h1>{vehicleObject.Types[2]}</h1>
            {fruitArray[2]}
            <button onClick={() => alert('Function Called')}>Click Me for alert</button>
            <button onClick={()=>add(2,5)}>Click Me for addition</button>
        </div>
    )
}

export default Testing1;