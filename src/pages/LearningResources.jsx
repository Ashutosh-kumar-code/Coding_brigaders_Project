import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import image1 from "../assets/images/Cyber-Security1jpg.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink, useNavigate } from 'react-router-dom';

const LearningResources = () => {

  const learningdata = [
    {title: "Data Science", type: "Beginner course"},
    {title: "Advance Javascript", type: "Advance Course"},
    {title: "Cybersecurity Analyst", type: "Beginner Professional "},
    {title: "Prompt Engineering", type: "Beginner Specialization"},
    {title: "Introduction to Programming with Python and Java", type: "Beginner Specialization"}, 
    {title: "Excel Skills for Business", type: "Beginner course"}, 
    {title: "MERN Stack", type: "Advance Course"}, 
    {title: "MEAN Stack", type: "Advance Course"}, 
  ]
 
  const navigation = useNavigate();

  const redirect =()=>{
    navigation('/quiz')
  }
  
  
  
  return (
    <div>
      <Header />

<div className="learning_resoucesection">
  <div className="container">
  <h2 className='h2_heading' >Learning Resources for you</h2>

  <DropdownButton id="dropdown-basic-button" title="Take a Quiz" className='dropdown_button' >
      <Dropdown.Item onClick={redirect} ><NavLink to={'/quiz'}> Java</NavLink> </Dropdown.Item>
      <Dropdown.Item onClick={redirect} ><NavLink to={'/quiz'}> Python</NavLink> </Dropdown.Item>
      <Dropdown.Item onClick={redirect} ><NavLink to={'/quiz'}> JavaScript</NavLink> </Dropdown.Item>
      <Dropdown.Item onClick={redirect} ><NavLink to={'/quiz'}> C++</NavLink> </Dropdown.Item>
    </DropdownButton>

<h2 className='sub-topic'>See what you can learn with us </h2>

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
      <p>{v.type}</p>
      </div>
        </div>
      )
    })
  }

</div>


  </div>
</div>

      <Footer />

    </div>
  )
}

export default LearningResources
