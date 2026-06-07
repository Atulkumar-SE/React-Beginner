import React from 'react'

export default function MapFxn() {
    const userData=[
        {
            name:"John Doe",
            email:"john.doe@example.com",
            age:30,
            id:1
        },
         {
            name:" Jane Doe",
            email:"jane.doe@example.com",
            age:20,
            id:2
        },
         {
            name:"Peter Parker",
            email:"peter.parker@example.com",
            age:25,
            id:3
        },
         {
            name:"Alex Smith",
            email:"alex.smith@example.com",
            age:30,
            id:4
        },
         {
            name:"Iron Man",
            email:"tony.stark@example.com",
            age:30,
            id:5
        },
         {
            name:"Thor Odinson",
            email:"thor.odinson@example.com",
            age:30,
            id:6
        },
         {
            name:"Bruce Wayne",
            email:"bruce.wayne@example.com",
            age:30,
            id:7
        },
    ]
  return (
    <div>
    <h2>User Data Dynamic</h2>
    <table border={1} cellPadding={10} cellSpacing={0}>
<thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>ID</th>
    </tr>
</thead>
<tbody>
    {
        userData.map((user)=>(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.id}</td>
            </tr>
        ))
    }
</tbody>
    </table>
    <h2>User Data Static</h2>

    <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>ID</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>30</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Jane Doe</td>
            <td>jane.doe@example.com</td>
            <td>20</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Peter Parker</td>
            <td>peter.parker@example.com</td>
            <td>25</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Alex Smith</td>
            <td>alex.smith@example.com</td>
            <td>30</td>
            <td>4</td>
        </tr>

        </tbody>
    </table>
    </div>
  )
}
