import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import image1 from "../assets/images/How-to-manage-a-project-2.png";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink, useNavigate } from 'react-router-dom';

const BuyProjectsList = () => {

    const learningdata = [
        {title: "To-do list", type: "Beginner course"},
        {title: "Portfolio", type: "Advance Course"},
        {title: "Weather app", type: "Beginner Professional "},
        {title: "Build a chess game", type: "Beginner Specialization"},
        {title: "Random number generator", type: "Beginner Specialization"}, 
        {title: "Excel Skills for Business", type: "Beginner course"}, 
        {title: "MERN Stack", type: "Advance Course"}, 
        {title: "MEAN Stack", type: "Advance Course"}, 
      ]

  return (
    <>
      <Header />

<div className="learning_resoucesection buycards_maindiv">
  <div className="container">
  <h2 className='h2_heading'>Buy Projects </h2>

{/* <h2 className='sub-topic'>See what you can learn with us </h2> */}

<div className="inputflexfilter">
  <input type="text" placeholder='Enter text' />
  <button className='button_mainall'>Search</button>
</div>

<div className="row">
  {
    learningdata.map((v,i)=>{
      return(
        <div className="col-3">
        <div className="learning_card1">
      <img src={image1} alt="" />
      <h5>{v.title}</h5>
      <p>Building your own weather app can be a fun way to learn about how you can program apps
        that use data sourced from third parties.</p>
        <h5 className='price'>₹500</h5>
        <h6>Technology Used: React.js, Bootstrap</h6>
      </div>
        </div>
      )
    })
  }

</div>


  </div>
</div>

      <Footer />
    </>
  )
}

export default BuyProjectsList;
