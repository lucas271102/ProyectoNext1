

 async function getUsers(){
   const res =  await fetch('https://reqres.in/api/users')
   const data = await res.json()
}



export default function HomePage(){
  return(
    <div className="">HomePage</div>
  )
}  