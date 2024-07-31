import React from 'react'

const ProjectsList = () => {
  return (
    <>
         <div class="projectlist_mainsection">
    <div class="container">
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
        <div class="projectlist_rightsection">
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
            Project descriptions provide team members and stakeholders with an overview of team projects. 
            These descriptions include components like company goals, stakeholders, and deadlines. 
            By knowing more about these descriptions, you can create more effective documents. 
            </p>
            <div className="project_skillsflex"> <p>PHP</p> <p>JavaScript</p> <p>MySql</p> <p>Reactjs</p> </div>
            <div class="footer">
             <div className='project_datetimeflex'>
                <div class="stars">★★★★★ <span>4.9</span> </div>
                <div class="time">Date: 28/07/2024</div>
                </div>
                <div className="collaborate_cardbtn">
<button className='button_mainall' >Collaborate</button>
</div>
            </div>
        </div>
        <div class="card">
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
             <div className='project_datetimeflex'>
                <div class="stars">★★★★★ <span>4.9</span> </div>
                <div class="time">Date: 28/07/2024</div>
                </div>
                <div className="collaborate_cardbtn">
<button className='button_mainall' >Collaborate</button>
</div>
            </div>
            {/* <div className="collaborate_cardbtn">
<button className='button_mainall' >Collaborate</button>
</div> */}
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
             <div className='project_datetimeflex'>
                <div class="stars">★★★★★ <span>4.9</span> </div>
                <div class="time">Date: 28/07/2024</div>
                </div>
                <div className="collaborate_cardbtn">
<button className='button_mainall' >Collaborate</button>
</div>
            </div>
        </div>
        
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProjectsList
