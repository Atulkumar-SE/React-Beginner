import { useState } from "react";
import Header, { Content, Footer, key } from "./components/userComponent";
import "./App.css";
import Testing1 from "./components/testing1";
import Counter from "./components/counter";
import Headbar from "./components/header";
import UserProps from "./components/props";
import University from "./components/university";
import Students, { LoginUser } from "./components/students";
import Wrapper from "./components/wrapper";
import ChangeEvent from "./components/onChangeEvent";
import ControlledForm from "./components/controlledForm";
import Checkbox from "./components/Checkbox";
import RadioDropdown from "./components/Radio&Dropdown";

function App() {
  const [Jewellery, setJewellery] = useState("Ring");
  const [display, setDisplay] = useState(true);
  const [student, setStudent] = useState("Hello");
  let name = "Joshep";
  let email = "atul @example.com";
  const empObject = { id: 101, name: "jharnga", phone: 1234567890 };
  const empObject1 = { id: 102, name: "Alexa", phone: 1294567890 };
  const empObject2 = { id: 103, name: "Ghurahu", phone: 9934567890 };

  let universityList = [
    "Harvard University",
    "Stanford University",
    "MIT",
    "University of Cambridge",
    "University of Oxford",
  ];

  const changeJewel = () => {
    setJewellery("Necklace");
  };
localStorage.setItem('username', 'Alice');
// const browserData = JSON.parse(localStorage.getItem("username"));
// console.log(browserData);
const userObj = { name: "Atul", role: "Dev" };
localStorage.setItem("user_profile", JSON.stringify(userObj));
localStorage.setItem("theme", "dark"); // Plain string
const theme = localStorage.getItem("theme");
const profile = JSON.parse(localStorage.getItem("user_profile")); 
console.log(theme, profile);
  

return (
    <div className="bg-gray p-4">
   <Header />
   <RadioDropdown/>
   <hr/>
<Checkbox/>
   <hr/>
      <ControlledForm/>
      <hr/>
      <ChangeEvent/>
      <hr />
      <Wrapper color="Pink">
        <h1>Wrapper Component</h1>
        <p>
          This is a wrapper component that can be used to wrap other components.
        </p>
      </Wrapper>

      <Wrapper>
        <h1>Wrapper Updated Component</h1>
        <p style={{ color: "blue", border: "3px solid blue", padding: "10px" }}>
          This is a wrapper component that can be used to wrap other components.
        </p>
      </Wrapper>
      <LoginUser userName="John Doe" />

      {student && <Students name={student} />}

      <button onClick={() => setStudent("Chutiya Baccha")}>
        Update Student
      </button>
      <University datas={universityList[3]} />
      <hr />
      <h1>Props Example</h1>
      <UserProps name={name} email={email} empObject={empObject} />
      <UserProps empObject={empObject1} />
      <UserProps empObject={empObject2} />

      <button onClick={() => setDisplay(!display)}>display header</button>
      {display ? <Headbar /> : <h2>Header is hidden </h2>}
      <h1>Jewellery: {Jewellery}</h1>
      <button onClick={changeJewel}>Change Jewellery</button>
      {/* <button onClick={Counter}>Count Jewelery</button> */}
      <Counter />

      <h1>Hello Beginner!</h1>
      <h2>Let's learn the basics of React!</h2>
      <Vegitable />
      <Fruits />
      {total()}
      <Content />
      {key}
      <hr />
      <Testing1 />
      <Footer />
    </div>
  );
}

function Vegitable() {
  return (
    <div>
      <h1>Vegitable</h1>
      <Fruits />
      <h2>Vegitable is good for health</h2>
    </div>
  );
}
function Fruits() {
  return <h1>Fruits</h1>;
}
function total() {
  return 2 + 4;
}
export default App;
