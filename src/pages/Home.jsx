import React, { useEffect, useState } from 'react' 
import Footer from '../components/Footer'
import Help from '../components/Home/Help'
import Header from '../components/Header'
import OurFaq from '../components/Home/OurFaq'
import ContactusForm from '../components/Home/ContactusForm'
import AboutUs from '../components/Home/AboutUs'
import WhatClientSay from '../components/Home/WhatClientSay'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem('Role');
    setRole(userRole);
}, []);

const navigation = useNavigate();

const redirect =()=>{
  navigation('/join-us');
}

  return (
    <>
    <Header />

    <div className="home_banner">
                <div className="container">
                    <h1 className="banner_title">Collaborate and Create: Bring Your Ideas to Life!</h1>
                    <p>Share your project ideas, find collaborators, and get expert guidance. Join our community and turn your vision into reality!</p>
                   {role == "" || role == undefined ? <button className="join_nowbtn" onClick={()=>redirect()} >Join Now</button> : '' }
                </div>
            </div>

      <Help/>
<AboutUs />
      {/* <WhatClientSay /> */}
      <OurFaq />


<ContactusForm />

      <Footer/>
    </>
 
  )
}

export default Home;
