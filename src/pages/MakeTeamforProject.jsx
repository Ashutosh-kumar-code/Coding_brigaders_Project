import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const MakeTeamforProject = () => {
  return (
    <>
      <Header />
<div className='maketeam_mainsection'>
<div className="container">
        <div className='upload_projectsection'>
                <h2 className="text-2xl mb-4 mt-4">Make team for your project</h2>
                <div className='w-[700px]'>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                            Team Name
                        </label>
                        <input
                            type="text"
                            name="projteamnameectName"
                            id="projectName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technology">
                            Team Description
                        </label>
                        <textarea
                            type="text"
                            name="technology"
                            id="technology"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technology">
                            Team Goal
                        </label>
                        <input
                            type="text"
                            name="technology"
                            id="technology"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>

<div className="searchmemers">
    <NavLink to={'/students-list'} > <div className="button_mainall" > Search member for team </div> </NavLink>
</div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
                            Add members in team by adding their email
                        </label>
                        <textarea
                            name="projectDescription"
                            id="projectDescription"
                            rows={4}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>
                  
                    <button
                        type="submit"
                        className="button_mainall"
                    >
                        Submit
                    </button>

                    {/* <button  className="mt-4 bg-[#ed2a4f] text-white py-2 px-4 rounded">Close</button> */}
                </div>
                </div>

                </div>
</div>

<Footer />

    </>
  )
}

export default MakeTeamforProject;
