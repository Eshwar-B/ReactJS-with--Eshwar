import { useEffect, useState } from "react"


const  Users =  () => {

    const[usersList, setUsersList] = useState([]);
    
    async function fetchUsers()
    {
        try
        {
        const responseApi = await fetch('https://dummyjson.com/users');
        const data = await responseApi.json();

        if(data?.users)
        {
            setUsersList(data?.users);
        }
        else{
            setUsersList([]);
        }
    }
    catch(e)
    {
        console.log(e);
    }
    } 
    
    // useEffect( () => { fetchUsers() }, []);

    return(
        <div>
            <h2>Welcome to React</h2>
            <button onClick={fetchUsers}>Fetch All Users</button>
        <ol>
            {
                usersList && usersList?.length > 0
                ? usersList.map( (userItem) => ( <li key={userItem?.id}> <p> {userItem.firstName} {userItem.lastName}</p></li>))
                : <p>No Users found, Please Try Again!!</p>
            }
        </ol>
        </div>
    )
   
    
}

export default Users