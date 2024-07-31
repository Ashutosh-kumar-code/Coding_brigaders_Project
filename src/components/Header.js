import React,{ useState ,useEffect } from "react";
import logo from "../assets/images/joomla-logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const [role, setRole] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const userRole = localStorage.getItem('Role');
      setRole(userRole);
  }, []);

  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("Role")
   setIsLoggedIn(false);
};

  return (
    <div>
      <section className="header_mainmainclass">
        <div className="container">
          <div className="flex flex-row justify-between items-center  ">
            <div className=" object-cover">
              {" "}
              <NavLink to="/" className="no-underline">
                <div className="website_logomain">
                  <img src={logo} alt="" /> <h6 className="">Logo</h6>
                </div>
              </NavLink>{" "}
            </div>
            <div>
              <ul className="flex gap-4 items-center header_rightnavlinks">
                <li>
                  <NavLink
                    className="font-semibold text-lg hover:border-b-[#ed2a4f] hover:border-b-4 h-8 no-underline text-black pb-1"
                    to={"/projects"}
                  >
                    Projects
                  </NavLink>
                </li>
                {role === "Student" && (
                <li>
                  <NavLink
                    className="font-semibold text-lg hover:border-b-[#ed2a4f] hover:border-b-4 h-8 no-underline text-black pb-1"
                    to={"/mentor"}
                  >
                    Mentor
                  </NavLink>
                </li>
                )}
                <li>
                  <NavLink
                    className="font-semibold text-lg hover:border-b-[#ed2a4f] hover:border-b-4 h-8 no-underline text-black pb-1"
                    to={"/learning-resouces"}
                  >
                    Learning Resources
                  </NavLink>
                </li>
               
                {role === "Student" && (
                <li>
                  <NavLink
                    className="font-semibold text-lg hover:border-b-[#ed2a4f] hover:border-b-4 h-8 no-underline text-black pb-1"
                    to={"/my-project"}
                  >
                    My Projects
                  </NavLink>
                </li>
                )}
                <li>
                  <NavLink
                    className="font-semibold text-lg hover:border-b-[#ed2a4f] hover:border-b-4 h-8 no-underline text-black pb-1"
                    to={"/students-list"}
                  >
                    Students List
                  </NavLink>
                </li>
                {role === "Professional" && (
                <li>
                  <NavLink
                    className="font-semibold text-lg hover:border-b-[#ed2a4f] hover:border-b-4 h-8 no-underline text-black pb-1"
                    to={"/upload-saleprojects"}
                  >
                    Upload Projects for Sale
                  </NavLink>
                </li>
                )}
                {role === "Student" && (
                <li>
                  <NavLink
                    className="font-semibold text-lg hover:border-b-[#ed2a4f] hover:border-b-4 h-8 no-underline text-black pb-1"
                    to={"/buy-projects"}
                  >
                    Buy Projects
                  </NavLink>
                </li>
                )}
                {/* <li className="font-semibold text-lg  ">
                  <NavLink to="/join" className="no-underline">
                    {" "}
                    <div
                      type="button"
                      className="border px-4  bg-[#ed2a4f] text-white button_mainall"
                    >
                      Login
                    </div>
                  </NavLink>
                </li> */}

<li className='font-semibold text-lg  '>
                                    <li className='font-semibold text-lg'>
                                        {role && (role === "Student" || role === "Professional") ? (

                                            <div className="header_dropdownnav">
                                                <button onClick={toggleDropdown} className='border px-4 bg-[#ed2a4f] text-white button_mainall'>
                                                    My Profile
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className="headnavdropdown-content">
                                                        <NavLink to={role === "Student" ? "/my-profile" : "/professional-myprofile"} >View Profile</NavLink>
                                                        {/* <NavLink to="/edit-profile">Edit Profile</NavLink> */}
                                                        {/* <NavLink to="/settings">Settings</NavLink> */}
                                                        <NavLink to="/join-us" onClick={handleLogout} >Logout</NavLink>
                                                    </div>
                                                )}
                                            </div>



                                        ) : (
                                            <NavLink to="/join-us" className='no-underline'>
                                                <div type='button' className='border px-4 bg-[#ed2a4f] text-white button_mainall'>
                                                    Login
                                                </div>
                                            </NavLink>
                                        )}
                                    </li>
                                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
