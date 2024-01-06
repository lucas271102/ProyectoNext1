import React from "react";
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
async function UserPage({ params }) {
  console.log(params);
  const user = await getUser(params.id);
  return (
    <di className='flex justify-center items-center p-10'>
      <div className="bg-red-500 p-4 flex justify-center items-center flex-col rounded-md w-[50%]">
        <h1>User page </h1>
        <img src={user.avatar} className="m-auto" />
        <h3>
          {user.id} {user.first_name} {user.last_name}
        </h3>
        <p>Email: {user.email}</p>
      </div>
    </di>
  );
}

export default UserPage;
