async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  console.log(data)
  return data.data
}

async function HomePage() {
  const users = await fetchUsers();
  return (
    <>
     <h1 className="text-center p-4  text-xl">Lista de usuarios registrados</h1>

      <div className="flex gap-2 flex-wrap items-center justify-center container mx-auto bg-slate-200 rounded-md p-2">
        {users.map(user => (
          <div  >


            <h2 className="text-center text-black">{user.first_name}  {user.last_name}</h2>
            <h3 className="text-black text-center">Email : {user.email}</h3>
            <img src={user.avatar} className="w-36 h-36  rounded-md flex justify-center items-center" />
          </div>

        ))}



      </div>
    </>
  )
}
export default HomePage;
