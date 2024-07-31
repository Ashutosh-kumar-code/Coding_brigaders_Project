
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MentorsList from '../components/MentorsList';

const mentors = [
    { name: "dgruvi", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "shimmer", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "sikha", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "nikariks", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "wnasikha", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "lokesh", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "gori", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "lakshita", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },
    { name: "gori", Image: require("../assets/images/carousel-image2.png"), skills: "java, python, mern, django", projectName: "weather app" },

];

const Mentors = () => {
    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState("");

    const handleFilter = () => {
        setFilter(!filter);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredMentors = mentors.filter(mentor => 
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.skills.toLowerCase().includes(search.toLowerCase()) ||
        mentor.projectName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <Header />
        <div className=' '>
      
            {/* <div className='flex gap-3 justify-between items-center '>
                <div 
                    className='border w-32 py-2 flex justify-center items-center text-lg bg-[#ed2a4f] text-white mb-3' 
                    onClick={handleFilter}
                >
                    Filter
                </div>
                {filter && (
                    <input 
                        type="text" 
                        placeholder='Search' 
                        className='px-4 py-2 text-lg border-2 border-[#ed2a4f] mb-3'
                        value={search}
                        onChange={handleSearch}
                    />
                )}
            </div> */}
            {/* <div className='grid grid-cols-3 gap-4'>
                {filteredMentors.map((mentor, index) => (
                    <div className='rounded-lg px-4 py-2 shadow-lg' key={index}>
                        <div className='flex items-center gap-4 my-1.5'>
                            <img src={mentor.Image} alt="" className='w-10 h-10 rounded-full border-2 border-[#e6798d]' />
                            <div>{mentor.name}</div>
                        </div>
                        <div>Skills: {mentor.skills}</div>
                        <div>Projects: {mentor.projectName}</div>
                    </div>
                ))}
            </div> */}

            <MentorsList />

            
            <Footer/>
        </div>

        </>
    );
};

export default Mentors;
