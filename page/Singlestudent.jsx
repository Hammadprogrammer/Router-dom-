import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleStudent = () => {
    const [data, setData] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setData(res)
            }).catch((err) => {
                console.log(err);

            })
    }, [])
    return (
        <>
            {/* <div>SingleStudent {id}</div>
            {data ? data.map((item)=>{
                
            }) : <h1>Loading....</h1>} */}
            
            <div style={{
                backgroundColor:"black",
                color:"white",
                width:"100vw",
                height:"100vh",
                padding:"20px",
                fontSize:"20px",
                margin:'300px,0px,500px,0px'

            }}>
                <h1 style={{fontSize:'30px', fontWeight:"bold", color:"white" }}>Student details</h1>
            <h1>Name:{data ? data.name  : "loading..."}</h1>
            <h1>Email:{data ? data.email  : "loading..."}</h1>
            <h1>Mobile num:{data ? data.phone  : "loading..."}</h1>
            <h1>Address:{data ? data.address.city  : "loading..."}</h1>
            <h1>Address:{data ? data.address.city  : "loading..."}</h1>
            <h1>company:{data ? data.company.name : "loading..."}</h1>
            </div>
            
          
        </>
    )
}

export default SingleStudent


// {
//     data ? data.map((item)=>{
//       return <div key={item.id} >
//         <h3>{item.name}</h3>
//         <p>{item.username}</p>
//         <button onClick={()=> singleUser(item)}>show more</button>
//       </div>
//     }): <h1>Loading..</h1>
//   }