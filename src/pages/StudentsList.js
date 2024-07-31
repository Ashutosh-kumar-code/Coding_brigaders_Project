import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import imag1 from "../assets/images/images-student.png";
import indiaflag from "../assets/images/india.png";

const StudentsList = () => {

    const mentor_list = [
        {},
        {},
        {},
        {},
    ]

  return (
    <>
      
<Header />

<div className="students_listmain">

<div class="projectlist_mainsection ">
    <div class="container">

<h2 className='h2_heading'>Students List</h2>

        <div className="row">
        <div className="col-3"> 
        <div class="projectlist_leftpart">
            <div class="header">
                <h2>Fixed Price</h2>
            </div>
            <h4>max</h4>
            <div class="box special">
                <span class="left-span">$0</span>
                <input type="text" />
                <span class="right-span">USD</span>
            </div>
            <h4>min</h4>
            <div class="box special">
                <span class="left-span">$0</span>
                <input type="text" />
                <span class="right-span">USD</span>
            </div>
            <h4>search skills</h4>
            <div class="box search-box">
                {/* <i class="search-icon">🔍</i> */}
                <input type="text" placeholder="Search skills"/>
            </div>
            <div class="box checkbox-box">
                <label><input type="checkbox" name="option1"/> <span>Reactjs</span> </label>
                <label><input type="checkbox" name="option2"/> <span>Nodejs</span> </label>
                <label><input type="checkbox" name="option3"/> <span>Bootstrap</span></label>
                <label><input type="checkbox" name="option4"/> <span>PHP</span></label>
                <label><input type="checkbox" name="option5"/> <span>Next.js</span></label>
            </div>
        </div>
        </div>

        <div className="col-9">

        <div class="mentorslist_rightsection">
            {
                mentor_list.map((v,i)=>{
                    return(
                        <div class="card">
                        <div class="card-content">
                            <div class="image-content">
                                <img src={imag1} alt="Card Image" class="card-image" />
                                {/* <div class="online-status"></div> */}
                            </div>
                            <div class="text-content">
                                <div class="header">
                                    <h3 class="name">Joy Kumar 
                                        {/* <span class="username">@username</span> */}
                                    </h3>
                                    {/* <div class="right-header-content">
                                        <div class="top-row">
                                            <span class="inline-element" style={{fontWeight: '800'}}>₹10000 INR</span>
                                        </div>
                                        <span class="below-inline-element">per hour</span>
                                    </div> */}
                                </div>
                                <div class="inline-elements">
                                    <div class="flag-stars">
                                    <p>Qulaification: BTech</p>
                                        {/* <span class="stars">★★★★★</span> */}
                                        {/* <span class="rating">4.9</span> */}
                                        <span class="flag"> <img src={indiaflag} alt="" /></span>
                                        <span class="country">India</span>
                                    </div>
                                    {/* <i class="heart-icon">♡</i> */}
                                </div>
                                <p>MERN || REACTJS || NEXTJS || WORDPRESS</p>
                                
         <p>Motivated and detail-oriented student with a strong academic record and a passion for learning. 
            Demonstrated ability to effectively manage time and prioritize tasks,
             resulting in consistently high grades and successful completion of multiple projects.</p>
                                <div class="programming">php, C programming, JavaScript</div>
                                <div class="button-container" style={{marginTop: '-35px'}} >
                                    <button class="btn" style={{marginRight: "20px" }} >Hire</button>
                                    <button class="btn">Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
         
        </div>

        </div>

        </div>
        </div>
    </div>

</div>
 

<Footer />
    </>
  )
}

export default StudentsList;
