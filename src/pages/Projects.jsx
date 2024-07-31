

import React, { useState } from 'react';
import logo from "../assets/images/carousel-image3.png";
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ProjectsList from '../components/ProjectsList';

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                {children}
            </div>
        </div>
    );
};

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const [formData, setFormData] = useState({
        projectName: '',
        technology: '',
        projectDescription: ''
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            projectName: '',
            technology: '',
            projectDescription: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData]);
        console.log('Form Data:', formData);

        handleCloseModal();
    };

    return (
        <>
        <Header />
        <div className='container'>
            <div className='py-10'>
            {/* <div className='pb-4'>
                <div className='flex gap-5 justify-center items-center'>
                    <NavLink to={'/upload-project'} className="no-underline" >
                    <div
                        className='border px-5 py-2 bg-[#ed2a4f] text-white text-lg font-semibold cursor-pointer'
                        // onClick={handleOpenModal}
                    >
                        Upload Your Project
                    </div>
                    </NavLink>
                    <div className='text-lg py-2 px-4 border-2 text-[#ed2a4f] border-[#ed2a4f] cursor-pointer'>
                        Learn More
                    </div>
                </div>
            </div> */}
            <h2 className='h2_heading'>Collaborate with projects</h2>
            <div >

                <ProjectsList />

                {/* {submittedData.length > 0 && (
                    <div className='mt-3'>
                        <h2 className='text-2xl mb-4 font-bold'>Submitted Project Details</h2>
                        <div className='grid grid-cols-3 gap-4'>
                            {submittedData.map((data, index) => (
                                <div key={index} className='mb-4 px-4 py-2 shadow-lg  border' >
                                    <div>
                                        <img src={logo} alt="" className='w-full' />
                                    </div>
                                    <div>
                                        <strong>Project Name:</strong> {data.projectName}
                                    </div>
                                    <div>
                                        <strong>Technology:</strong> {data.technology}
                                    </div>
                                    <div>
                                        <strong>Project Description:</strong> {data.projectDescription}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                )} */}
            </div>

            {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} className="">
                <h2 className="text-2xl mb-4">Upload Your Project</h2>
                <form onSubmit={handleSubmit} className='w-[400px]'>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                            Project Name
                        </label>
                        <input
                            type="text"
                            name="projectName"
                            id="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
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
                            value={formData.technology}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
                            Project Description
                        </label>
                        <textarea
                            name="projectDescription"
                            id="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#ed2a4f] text-white py-2 px-4 rounded mr-4"
                    >
                        Submit
                    </button>

                    <button onClick={handleCloseModal} className="mt-4 bg-[#ed2a4f] text-white py-2 px-4 rounded">Close</button>
                </form>
            </Modal> */}
            </div>
           <Footer/>
        </div>
        </>
    );
};

export default Projects;

