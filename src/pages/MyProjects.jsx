import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const MyProjects = () => {

    const myprojects_listdata = [
{},
{},
    ];
  return (
    <>
       <Header />
<div className="myprojects_pagemian">
    <div className="container">
    <h2>My Projects</h2>

<div className="uploadanotherproject">
    <NavLink to={'/upload-project'} className='button_mainall'>Upload Another Project</NavLink>
</div>

<div className="myproject_listcards">
<div class="projectlist_rightsection">
    {
        myprojects_listdata.map((v,i)=>{
            return(
                <div class="card" key={i}>
                <div class="header">
                    <h3 className='project_name'>Project Name</h3>
                    <div class="right-header-content">
                        <div class="top-row">
                            <span class="new-span">Budget: </span>
                            <span class="inline-element"> ₹2000 - 4000</span>
                        </div>
                        {/* <span class="below-inline-element">average bid</span> */}
                    </div>
                </div>
                {/* <p> ₹Budget 4000-700INR</p> */}
                <p>
                Project descriptions provide team members and stakeholders with an overview of 
                team projects. These descriptions include components like company goals, stakeholders, 
                and deadlines. By knowing more about these descriptions, you can create more effective 
                documents. 
                </p>
                <div className="project_skillsflex"> <p>PHP</p> <p>JavaScript</p> <p>MySql</p> <p>Reactjs</p> </div>
                <div class="footer">
                    {/* <div class="stars">★★★★★<span>4.9</span></div> */}
                    <div class="time upload_date"> Upload Date: 29-07-24</div>
                </div>

<div className="card_navigtebtns">
<NavLink to={'/make-team'} className='button_mainall' >Make team for project</NavLink>
<NavLink to={'/mentor'} className='button_mainall' >Search mentor for project</NavLink>
</div>

            </div>
            )
        })
    }
          
        {/* <div class="card">
            <div class="header">
                <h3 className='project_name' >Project Name</h3>
                <div class="right-header-content">
                    <div class="top-row">
                        <span class="new-span">7bids</span>
                        <span class="inline-element">₹10000INR</span>
                    </div>
                    <span class="below-inline-element">average bid</span>
                </div>
            </div>
            <p> ₹Budget 4000-700INR</p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione atque inventore impedit perferendis cumque ullam iste vel quas reiciendis. Ipsa dicta itaque voluptate placeat sint exercitationem assumenda natus pariatur sunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit quod corrupti? Amet quidem numquam impedit eius. Necessitatibus earum, sapiente voluptas laboriosam mollitia, a vel natus molestias excepturi, 
            </p>
            <div className="project_skillsflex"> <p>PHP</p> <p>JavaScript</p> <p>MySql</p> <p>Reactjs</p> </div>
          
            <div class="footer">
                <div class="stars">★★★★★ <span>4.9</span> </div>
                <div class="time">12:00 PM</div>
            </div>
        </div>
        <div class="card">
            <div class="header">
                <h3 className='project_name'>Project Name</h3>
                <div class="right-header-content">
                    <div class="top-row">
                        <span class="new-span">7bids</span>
                        <span class="inline-element">₹10000INR</span>
                    </div>
                    <span class="below-inline-element">average bid</span>
                </div>
            </div>
            <p> ₹Budget 4000-700INR</p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione atque inventore impedit perferendis cumque ullam iste vel quas reiciendis. Ipsa dicta itaque voluptate placeat sint exercitationem assumenda natus pariatur sunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit quod corrupti? Amet quidem numquam impedit eius. Necessitatibus earum, sapiente voluptas laboriosam mollitia, a vel natus molestias excepturi, 
            </p>
            <div className="project_skillsflex"> <p>PHP</p> <p>JavaScript</p> <p>MySql</p> <p>Reactjs</p> </div>
          
            <div class="footer">
                <div class="stars">★★★★★<span>4.9</span></div>
                <div class="time">12:00 PM</div>
            </div>
        </div> */}
        
        </div>
</div>

</div>
</div>

<Footer />
    </>
  )
}

export default MyProjects;
