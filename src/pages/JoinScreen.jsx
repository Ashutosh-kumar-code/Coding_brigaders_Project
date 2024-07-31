import React,{ useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/joomla-logo.png";

const JoinScreen = () => {
  const navigate = useNavigate();
  const [role,setRole] = useState("")
  const [shouldNavigate, setShouldNavigate] = useState(false);


useEffect(() => {
  if (role) {
    localStorage.setItem("Role", role);
    if (shouldNavigate) {
      navigate("/create-profile", {
        state: {
          role: role,
          info: role === "Student" 
            ? "Searching for a mentor and learning resources"
            : "Looking for projects and learning resources",
        },
      });
      setShouldNavigate(false);
    }
  }
}, [role, shouldNavigate, navigate]);

const handleStudentClick = () => {
  setRole("Student");
  setShouldNavigate(true);
};

const handleProfessionalClick = () => {
  setRole("Professional");
  setShouldNavigate(true);
};


  return (
    <>
    <div className="container">
    <div className="website_logomain logomargin_topjoin">
    <img src={logo} alt="" /> <h6>Logo</h6>
</div>
</div>
  
    <div className="joining_screenmain">
      <div className="container">

        <div>
          <div className="text-center text-xl join_heading">
            Join as a student or Professional
          </div>
          <div className="flex  gap-5 justify-center">
            <div
              className="font-medium shadow-md text-gray-600 text-lg  joining_cards"
              onClick={handleStudentClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5z"></path><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66z"></path><line x1="10.65" x2="21" y1="17.29" y2="17.29" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><circle cx="10.04" cy="5.73" r="2.73" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27"></path></svg>
              I’m a student, searching for a mentor and learning resources
            </div>
            <div
              className="font-medium shadow-md  text-gray-600 text-lg joining_cards"
              onClick={handleProfessionalClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><polygon fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="19.38 21 8.38 21 10 14 21 14 19.38 21"></polygon><circle cx="14.69" cy="17.5" r=".5" fill="var(--icon-color, #001e00)" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="9.43" x2="5.99" y1="21" y2="21" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><circle cx="10.04" cy="5.73" r="2.73" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12"></path></svg>
              I’m a professional, looking for work 
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default JoinScreen;
