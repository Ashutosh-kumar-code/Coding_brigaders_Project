import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Help = () => {

  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem('Role');
    setRole(userRole);
}, []);

  return (
    <div className='container'>
        <div className='flex gap-12 my-16 justify-evenly items-center border rounded-xl py-28 shadow-lg'>
        <div>
            <div className='text-black text-3xl font-bold py-1'>Get help with your Project</div>
            <div className='text-lg font-normal'> connect with Professtional and mentors to take guidence and support on your project</div>
        </div>
        <div className=''>
            <NavLink to={role === "Student" ? '/upload-project': role === "Professional" ? '/upload-saleprojects': '/join-us'} className="no-underline" > <div className='button_mainall hone_uplaodprojectbtn' >Upload your project details now</div></NavLink>
        </div>
        </div>
      
    </div>
  )
}

export default Help
