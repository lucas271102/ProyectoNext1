

'use client'


import Link from 'next/link'
import React from 'react'



const Users = ({users}) => {
  return (
    <>
    
    <h1 className="text-center p-4  text-xl">
        Lista de usuarios registrados
      </h1>

      <div className="flex gap-2 flex-wrap items-center justify-center container mx-auto bg-slate-200 rounded-md p-2">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}
           className='border rounded-md p-3 border-black bg-white'>
            <h2 className=" text-black">
              {user.first_name} {user.last_name}
            </h2>
            <h3 className="text-black text-center">Email : {user.email}</h3>
            <img
              src={user.avatar}
              className="w-36 h-36  rounded-full flex justify-center items-center border border-black"
            />
          </Link>
        ))}
      </div>
    
    
    </>
  )
}

export default Users