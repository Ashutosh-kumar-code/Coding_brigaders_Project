import React, { useEffect, useRef, useState } from "react";
// import "./contactusform.scss";
import { NavLink } from "react-router-dom";

const ContactusForm = () => {
  return (
    <div className="container">
      <div>
        <div className="contact_title">
          <h3>Send us a Message</h3>
          <p>
            We would love to hear from you - any comments your have on the track
            or questions you may have.
          </p>
        </div>
      </div>

      <div className="contact_us_section">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contact_us_left">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="inputall_main">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="inputall_main">
                    <label htmlFor="">Email Address</label>
                    <input type="text" placeholder="Enter your Email Address" />
                  </div>
                </div>
              </div>

              <div className="inputall_main">
                <textarea type="text" rows={5} placeholder="Your Message" />
              </div>

              <button className="btn-common button_mainall">Send</button>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="call_us_area">
              <h3>Contact Information</h3>

              <div className="contact_info_area">
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                    >
                      <g
                        id="Group_2215"
                        data-name="Group 2215"
                        transform="translate(-977 -3478)"
                      >
                        <path
                          id="location-sharp"
                          d="M13.75,2.25A6.881,6.881,0,0,0,6.75,9c0,6,7,14.25,7,14.25s7-8.25,7-14.25A6.881,6.881,0,0,0,13.75,2.25Zm0,10.5a2.905,2.905,0,0,1-2.8-3,2.905,2.905,0,0,1,2.8-3,2.905,2.905,0,0,1,2.8,3A2.908,2.908,0,0,1,13.75,12.75Z"
                          transform="translate(977.25 3479.25)"
                          fill="#377c2b"
                        ></path>
                        <g
                          id="Rectangle_217"
                          data-name="Rectangle 217"
                          transform="translate(977 3478)"
                          fill="none"
                          stroke="#707070"
                          stroke-width="1"
                          opacity="0"
                        >
                          <rect width="28" height="28" stroke="none"></rect>
                          <rect
                            x="0.5"
                            y="0.5"
                            width="27"
                            height="27"
                            fill="none"
                          ></rect>
                        </g>
                      </g>
                    </svg>
                    <p>Address</p>
                    <strong>
                      A.B.C.D 17 Painters Road, RD1 Christchurch, New Zealand
                      7671
                    </strong>
                  </li>
                  <li>
                    <NavLink to="mailto:information@qctlc.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="Group_1141"
                          data-name="Group 1141"
                          transform="translate(-605 -5268)"
                        >
                          <path
                            id="mail"
                            d="M18,5.625H4.5A2.241,2.241,0,0,0,2.25,7.852V17.4A2.241,2.241,0,0,0,4.5,19.625H18A2.241,2.241,0,0,0,20.25,17.4V7.852A2.241,2.241,0,0,0,18,5.625Zm-.57,3.684-5.786,4.454a.648.648,0,0,1-.789,0L5.07,9.309a.632.632,0,0,1-.113-.893.647.647,0,0,1,.9-.112l5.391,4.151L16.641,8.3a.647.647,0,0,1,.9.112.632.632,0,0,1-.113.893Z"
                            transform="translate(605.75 5267.375)"
                            fill="#377C2B"
                          ></path>
                          <g
                            id="Rectangle_257"
                            data-name="Rectangle 257"
                            transform="translate(605 5268)"
                            fill="none"
                            stroke="#707070"
                            stroke-width="1"
                            opacity="0"
                          >
                            <rect width="24" height="24" stroke="none"></rect>
                            <rect
                              x="0.5"
                              y="0.5"
                              width="23"
                              height="23"
                              fill="none"
                            ></rect>
                          </g>
                        </g>
                      </svg>
                      <p>Email Address</p>
                      <strong>information@abcd.com</strong>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <h3 className="widget-title">Follow Us</h3>

              <div class="contact_follow_us">
                <ul>
                  <li class="tw_link">
                    <NavLink to="https://twitter.com/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="Group_750"
                          data-name="Group 750"
                          transform="translate(-853 -6466)"
                        >
                          <g
                            id="Group_629"
                            data-name="Group 629"
                            transform="translate(-4 5193)"
                          >
                            <path
                              id="Icon_awesome-twitter"
                              data-name="Icon awesome-twitter"
                              d="M16.15,6.745c.011.148.011.3.011.443,0,4.5-3.712,9.693-10.5,9.693A11.062,11.062,0,0,1,0,15.351a8.259,8.259,0,0,0,.891.042,7.786,7.786,0,0,0,4.58-1.455,3.672,3.672,0,0,1-3.449-2.363,5.029,5.029,0,0,0,.7.053,4.207,4.207,0,0,0,.971-.116A3.488,3.488,0,0,1,.731,8.169V8.127A3.951,3.951,0,0,0,2.4,8.559,3.345,3.345,0,0,1,.754,5.722,3.186,3.186,0,0,1,1.256,4,10.8,10.8,0,0,0,8.863,7.568a3.563,3.563,0,0,1-.091-.78,3.555,3.555,0,0,1,3.689-3.407,3.829,3.829,0,0,1,2.7,1.076A7.639,7.639,0,0,0,17.5,3.634a3.461,3.461,0,0,1-1.622,1.877A7.884,7.884,0,0,0,18,4.984,7.629,7.629,0,0,1,16.15,6.745Z"
                              transform="translate(860 1274.619)"
                              fill=""
                            ></path>
                            <g
                              id="Rectangle_191"
                              data-name="Rectangle 191"
                              transform="translate(857 1273)"
                              fill="none"
                              stroke="#707070"
                              stroke-width="1"
                              opacity="0"
                            >
                              <rect width="24" height="24" stroke="none"></rect>
                              <rect
                                x="0.5"
                                y="0.5"
                                width="23"
                                height="23"
                                fill="none"
                              ></rect>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </NavLink>
                  </li>
                  <li class="inst_link">
                    <NavLink to="https://www.instagram.com/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="Group_748"
                          data-name="Group 748"
                          transform="translate(-979 -6466)"
                        >
                          <g
                            id="Group_631"
                            data-name="Group 631"
                            transform="translate(96 5226)"
                          >
                            <path
                              id="Icon_metro-instagram"
                              data-name="Icon metro-instagram"
                              d="M17.582,1.928H5.559A3,3,0,0,0,2.571,4.916V16.94a3,3,0,0,0,2.988,2.988H17.582a3,3,0,0,0,2.988-2.988V4.916a3,3,0,0,0-2.988-2.988ZM8.333,9.8h6.476a3.428,3.428,0,1,1-6.476,0Zm9.988,0v6.749A1.128,1.128,0,0,1,17.2,17.678H5.946a1.128,1.128,0,0,1-1.125-1.125V9.8H6.58a5.115,5.115,0,1,0,9.981,0h1.76Zm0-3.938a.564.564,0,0,1-.562.563H16.633a.564.564,0,0,1-.562-.562V4.741a.564.564,0,0,1,.563-.562h1.125a.564.564,0,0,1,.563.563Z"
                              transform="translate(883.429 1241.072)"
                              fill=""
                            ></path>
                            <g
                              id="Rectangle_193"
                              data-name="Rectangle 193"
                              transform="translate(883 1240)"
                              fill="none"
                              stroke="#707070"
                              stroke-width="1"
                              opacity="0"
                            >
                              <rect width="24" height="24" stroke="none"></rect>
                              <rect
                                x="0.5"
                                y="0.5"
                                width="23"
                                height="23"
                                fill="none"
                              ></rect>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusForm;
