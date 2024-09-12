import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
   <>
   <div className='flex justify-center gap-16 p-5   bg-slate-900' >
        <Link to="" className='text-slate-300 hover:text-slate-500'>Home</Link>
        <Link to="about"  className='text-slate-300 hover:text-slate-500' >About</Link>
        <Link to="contact" className='text-slate-300 hover:text-slate-500' >Contact</Link>
        <Link to="service" className='text-slate-300 hover:text-slate-500' >Services</Link>
    </div>
   </>
  )
}

export default Navebar


// style={{
//   display: "flex",
//   justifyContent: "center",
//   gap: "20px",
//   margin: "30px"
// }}