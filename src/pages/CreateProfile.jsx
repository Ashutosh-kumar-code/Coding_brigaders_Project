import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import logo from "../assets/images/joomla-logo.png";


const CreateProfile = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location;
 

    const profile = "Professtional";

    return (
        <>
         <div className="container">
    <div className="website_logomain logomargin_topjoin">
    <img src={logo} alt="" /> <h6>Logo</h6>
</div>
</div>
            {state.role === "Student" && (
                <div className='container'>
                    <div className='flex justify-center items-center py-10 '>
                        <div className='flex flex-col gap-3 border px-4 py-10 rounded-lg shadow-xl'>
                        <div className='text-start text-xl font-bold'>Create Profile</div>
                        <input type="text" placeholder='Enter First Name' className='px-4 py-3 w-96  border rounded-md shadow-md' />
                        <input type="text" placeholder='Enter Last Name ' className='px-4 py-3 w-96 border rounded-md shadow-md' />
                        <input type="text" placeholder='Enter your email ' className='px-4 py-3 w-96 border rounded-md shadow-md' />
                        <input type="text" placeholder='Enter your password ' className='px-4 py-3 w-96 border rounded-md shadow-md' />
                        <input type="text" placeholder='Enter your last or pursuing education' className='px-4 py-3 w-96 border rounded-md shadow-md' />
                        <input type="text" placeholder='Enter your skills' className='px-4 py-3 w-96 border rounded-md shadow-md' />
                        <input type="text" placeholder='Enter your Country' className='px-4 py-3 w-96 border rounded-md shadow-md' />
                        <button className='button_mainall' onClick={()=>navigate("/")}>Submit</button>
                        </div>
                     
                    </div>
                </div>
            )}
            {state.role === "Professional" && (
                <div className='container'>
                    <div className='flex   justify-center items-center py-10 '>
                        <div className='flex flex-col gap-4 border px-4 py-10 rounded-lg shadow-xl'>
                        <div className='  text-xl font-bold'>Create Profile</div>
                        <input type="text" placeholder='Enter first name' className='px-4 py-3 w-96 border rounded-md' />
                        <input type="text" placeholder='Enter last name' className='px-4 py-3 w-96 border rounded-md' />
                        <input type="text" placeholder='Enter your email' className='px-4 py-3 w-96 border rounded-md' />
                        <input type="text" placeholder='Enter your password' className='px-4 py-3 w-96 border rounded-md' />
                        <input type="text" placeholder='Enter your skills' className='px-4 py-3 w-96 border rounded-md' />
                        <input type="text" placeholder='Enter your experience' className='px-4 py-3 w-96 border rounded-md' />
                        <input type="text" placeholder='Enter your country' className='px-4 py-3 w-96 border rounded-md' />
                        <textarea type="text" placeholder='Enter a brief intro about you' className='px-4 py-3 w-96 border rounded-md' />
                        <button className='button_mainall' onClick={()=>navigate("/")}>Submit</button>
                        </div>
                       
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateProfile;
