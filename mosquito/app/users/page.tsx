import { link } from "fs";
import React from "react";

interface User {
    id: number;
    name: string;
}

const Userspage = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const users: User[] = await response.json();

    return (
       <>
       <h1>Users</h1>
       <p>{new Date().toLocaleDateString()}</p>
       <ul>
        {users.map(user => <li key={user.id}>{user.id} - {user.name} </li>) }
       </ul>
       </>
    )
}

export default Userspage