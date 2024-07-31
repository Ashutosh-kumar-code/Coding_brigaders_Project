import React, { useRef, useState } from "react";
// import "./ourfaq.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
// import leftimg1 from "../../assets/images/Client-Meeting.jpeg";

const OurFaq = (props) => {

//   const {faq_list} = props;
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState([]);

  const scroll = (e, id) => {
    e.preventDefault();
    if(id){
    // const section = document.querySelector(id);
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start",  });
   
    }
  };

  const handleChange = (panel,e,ids)=> {
    
    if(expanded.includes(panel)){
      const result = expanded.filter((e) => e !== panel);
    setExpanded(result);
    }else{
    setExpanded([...expanded, panel]);
  
    scroll(e,ids);
    
    }
  
  };


  const faq_list = [
    {
      topic: "What types of projects?",
      description:
        "You can upload any academic, technical, or creative project for feedback and collaboration.",
    },
    {
      topic: "How to find a mentor?",
      description:
        "Search our platform to find mentors and professionals who match your project needs.",
    },
    { topic: "Can I team up?", description: "Yes, you can team up with other students to work on projects and enhance your skills together." },
     
  ];

  return (
    <>
      <div className="container" >
        <div className="ourfaq_mainsection">
          <div className="faq_section" >
            <h2>Our FAQ's</h2>
            {/* onClick={(e) => scroll(e, "#contact-us")} */}
            {faq_list?.map((value, i) => {
              return (
                <Accordion onChange={(e)=>{handleChange(i,e,`#contact${i}`);  }} id={`#contact${i}`} >
                  <AccordionSummary
                    // expandIcon={
                    //   expanded.includes(i) ? (
                    //     <RemoveIcon />
                    //   ) : (
                    //     <AddOutlinedIcon />
                    //   )
                    // }
                    // ref={sectionRef}
                    // onClick={(e)=>scroll(e, `#contact${i}`)} 
                    aria-controls="panel1-content"
                    id="panel1-header"
                  
                  >
                    <Typography>
                       
                      <div className="faq_headingflex"   >
                        {value.topic} 
                        <div className="side_icons">
                          {
                            expanded.includes(i) ? <RemoveIcon /> : <AddOutlinedIcon />
                          }
                          
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography  >{value.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFaq;
