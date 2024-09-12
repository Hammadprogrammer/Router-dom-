import React from 'react'

const Card = ({name ,email,phone,city}) => {
  return (
    <div>
      <div style={{
        width: "200px",
        height: "200px",
        padding: "10px",
        border: "1px solid black"
      }}>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{phone}</h1>
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default Card
