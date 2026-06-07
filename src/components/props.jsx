function UserProps({name, email, empObject}){
    console.log("props log",name);
    console.log("props log",email);
    console.log("props log",empObject);
    return(
        <div>
        <hr/>
            <h1>Props  </h1>
            <h4>{name}</h4>
            <p>{email}</p>
            <h4>Employe Details</h4>
            <h5>Employee Id:{empObject.id}</h5>
            <h5>Employee Name: {empObject.name}</h5>
            <h5>Employee Phone: {empObject.phone}</h5>
        </div>
    )
}

export default UserProps;