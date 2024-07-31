import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const UploadProject = () => {
  return (
    <>
    <Header />
       <div className="container">
        <div className='upload_projectsection'>
                <h2 className="text-2xl mb-4 mt-4">Upload Your Project</h2>
                <div className='w-[700px]'>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                            Project Name
                        </label>
                        <input
                            type="text"
                            name="projectName"
                            id="projectName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technology">
                            Technology
                        </label>
                        <input
                            type="text"
                            name="technology"
                            id="technology"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technology">
                            Project Budget
                        </label>
                        <input
                            type="text"
                            name="technology"
                            id="technology"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
                            Project Description
                        </label>
                        <textarea
                            name="projectDescription"
                            id="projectDescription"
                            rows={4}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
                            What help I need
                        </label>
                        <textarea
                            name="helpdescription"
                            id="helpdescription"
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
<Footer />
    </>
  )
}

export default UploadProject;
