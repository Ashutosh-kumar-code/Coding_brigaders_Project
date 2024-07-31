import React from 'react'
// import "./whatclientsay.scss";
// import OwlCarousel from "react-owl-carousel";
// import { images } from '../../../actions/customFn'; 
import leftimg1 from "../../assets/images/Client-Meeting.jpeg";
import quotation_left from "../../assets/images/quotecoma-left.png";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

// const experience = {
//   loop: true,
//   margin: 0,
//   nav: false,
//   dots: false,
//   autoplay: true,
//   autoplaySpeed: 800,

//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 2,
//     },
    
//   },
// };


const WhatClientSay = () => {

    const latestdata = [
        { },
        { },
        { },
        { },
        { },
        { },
        { },
        { },
      ];

  return (
   <div className="whatclient_saysectionmain">
    <div className="container">   

<h2>What Clients Say</h2>

<div className="clientsay_sectionflex">
    <div className="section_bgleftimg">  
<img className='left_imagesection' src={leftimg1} alt="" />
</div>   

<div className="clientsay_carosoul">

              {/* <OwlCarousel
                {...experience}
                className=""
                //   nav
                margin={30}
              >
                {latestdata.map((value, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="clientay_cards1">
                        <div className="quote_img">   <img src={quotation_left} alt="" /> </div>
                        <p class="slider_txt">“After each amazing days walk, following a well established track from the beach to the bush with the birds in full voice, we were rewarded with great lodging and great food.
                        Fantastic 4 days.”</p> 
                        <h6>Ruth, March 2024</h6>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel> */}
        
</div>

</div>

</div>
   </div>
  )
}

export default WhatClientSay;