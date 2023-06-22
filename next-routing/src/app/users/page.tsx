import React from 'react'
const getUsersData=async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
export default async function Users (){
    const users= await getUsersData();
  return (
    <>
    <div>List of Users</div>
    {users.map((user:any)=><ul key={user.id}><li>{user.name}</li></ul>)}
    </>
  )
}

   