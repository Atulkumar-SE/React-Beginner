function Students(name){
    console.log("student name",name);
    return(
        <div>
        <hr/>
        <h2>Students</h2>
        <p>Student Name: {name.name}</p>
        <hr/>
        </div>
    )
}

export function LoginUser({userName="New User"}){
  return(
    <div>
        <span>Login User: {userName}</span>

    </div>
    )
}
export default Students;