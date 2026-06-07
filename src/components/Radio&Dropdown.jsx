import React, {useState} from 'react'

export default function RadioDropdown() {
  const [gender, setGender] = useState("male");
  const [city,setCity] = useState("noida")
  return (
    <div>
      <h1>Radio & Dropdown Component</h1>
      <div>
      <h2>Select Gender</h2>
        <input checked={gender === "male"} type="radio" name="gender" value="male" id="male" onChange={(event) => setGender(event.target.value)}/>
        <label htmlFor="male">Male</label>
        <br/>
        <input checked={gender === "female"} type="radio" name="gender" value="female" id="female" onChange={(event) => setGender(event.target.value)}/>
        <label htmlFor="female">Female</label>
        
        <br/>
                <h3>{gender}</h3>

        <br/><br/>
              <h2>Select City</h2>

       <select onChange={(e)=>setCity(e.target.value)} defaultValue={"noida"}>
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
       </select>
       <h3>Selected City: {city}</h3>

      </div>
    </div>
  )
}
