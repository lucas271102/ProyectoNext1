async function getUsers() {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  return data.data
}

async function HomePage() {
  const users = await getUsers();
  return <div className="bg-black">
    <h1>{users.first_name}  {users.last_name}</h1>
    <img src={users.avatar}/>
    
  
    
  </div>;
}
export default HomePage;
