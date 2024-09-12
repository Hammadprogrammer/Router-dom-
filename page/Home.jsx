import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data , setData] = useState(null);

  // usenavigate
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      }).catch((err) => {
        console.log(err);

      })
  }, [])

  const singleUser = (item) =>{
    navigate(`singlestudent/${item.id}`)
  }
  return (
    <>
    <h1 style={{fontSize:"30px", margin:"20px", fontWeight:"bold"}}>Hello Students</h1>
    {
      data ? data.map((item)=>{
        return <div key={item.id} style={{
          border: "1px solid black",
          margin: "20px",
          padding: "20px",
          backgroundColor:"black"
        }}>
          <h3 style={{
            color:"white"
          }}>Name:{item.name}</h3>
          <p style={{
            color:"white"
          }}>Username:{item.username}</p>
          <button onClick={()=> singleUser(item)} style={{ border: "2px solid white",
             padding:"2px", backgroundColor:"black",
             color:"white" }}>Show student detail</button>
        </div>
      }): <h1>Loading..</h1>
    }
   
    </>
  )
}

export default Home