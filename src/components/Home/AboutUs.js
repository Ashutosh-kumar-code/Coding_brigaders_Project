import React from "react";
// import "./aboutus.scss";
// import { images } from "../../../actions/customFn";
import leftimg1 from "../../assets/images/Client-Meeting.jpeg";

const AboutUs = () => {
  return (
    <div className="about-us-main-section">
      <div className="container">
        <div className="both-side-grid wd-info-grid">
          <div className="image-side-box wd-info-50">
            <div className="image-side-rigth">
              <img src={leftimg1 } alt="" />
            </div>
          </div>
          <div className="text-side-box wd-info-50">
            <div className="title-inner">
              <h3 class="widget-title">About Us</h3>
            </div>

            <div className="text-all-info">
              <p>
              Welcome to ProjectConnect, the ultimate platform where students can
share their project details and receive assistance from professionals and
 fellow students. Our mission is to facilitate collaboration and knowledge
exchange, empowering students to achieve their academic and personal goals.
 
              </p>
              <p>
              By connecting learners with experienced mentors and peers, we provide a
supportive environment that fosters innovation, learning, and growth.
Join our community today and take advantage of the collective expertise
 to excel in your projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
