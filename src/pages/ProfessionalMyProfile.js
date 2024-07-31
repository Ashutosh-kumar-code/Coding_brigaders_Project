import React from 'react'
import { useState } from 'react';
import image from "../assets/images/image-badge.jpg"
import ProfessionalMySkills from '../components/ProfessionalMySkills';
import ProessionalSaleProjects from "../components/ProessionalSaleProjects"
import ProfessStudentHelped from "../components/ProfessStudentHelped"
import ProfessionalProjectsCollaborate from '../components/ProfessionalProjectsCollaborate';
import Header from '../components/Header';

const badges = [
  {
    id: 1,
    name: "Achievement Award",
    image: image,
    description: "Awarded for exceptional performance in a project."
  },
  {
    id: 2,
    name: "Star Performer",
  image: image,
    description: "Recognized as a top performer in the team."
  },
  {
    id: 3,
    name: "Excellence Trophy",
  image: image,
    description: "Received for outstanding contributions."
  },
  {
    id: 4,
    name: "Gold Medal",
  image: image,
    description: "Awarded for achieving top results."
  }
];

const ProfessionalMyProfile = () => {

  
  const [activeTab, setActiveTab] = useState('ProfessionalMySkills');
    

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  const renderMyBadges = () => (
    <div className="badges-container">
      <h2>My Badges</h2>
      <div className="badges-grid pt-10 flex">
        {badges.map(badge => (
          <div key={badge.id} className="badge-card mx-6">
            {/* <FontAwesomeIcon icon={badge.icon} className="badge-icon" /> */}
            <img src={badge.image} alt="" className='w-28 h-28 rounded-full' />
            <h3 className="badge-name">{badge.name}</h3>
            <p className="badge-description">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'ProfessionalMySkills':
        return <ProfessionalMySkills/>
      case 'ProfessionalMyProjects':
        return <ProessionalSaleProjects/>
      case 'ProfessionalStudentHelped':
        return <ProfessStudentHelped/>
      case 'ProfessionalProjectsICollaborate':
        return  <ProfessionalProjectsCollaborate/>
      case 'ProfessionalMyBadges':
        return renderMyBadges();
      default:
        return null;
    }
  };
  
  return (
    <> 
    <Header />
    <div className="profile-container">
    <aside className="sidebar">
      <button
        className={`sidebar-link ${activeTab === 'ProfessionalMySkills' ? 'active' : ''}`}
        onClick={() => handleTabClick('ProfessionalMySkills')}
      >
        My Skills
      </button>
      <button
        className={`sidebar-link ${activeTab === 'MyProjects' ? 'active' : ''}`}
        onClick={() => handleTabClick('ProfessionalMyProjects')}
      >
       Uploaded sale projests
      </button>
      <button
        className={`sidebar-link ${activeTab === 'ProfessionalStudentHelped' ? 'active' : ''}`}
        onClick={() => handleTabClick('ProfessionalStudentHelped')}
      >
       Student helped
      </button>
      <button
        className={`sidebar-link ${activeTab === 'ProjectsICollaborate' ? 'active' : ''}`}
        onClick={() => handleTabClick('ProfessionalProjectsICollaborate')}
      >
        Projects I Collaborate
      </button>
      <button
        className={`sidebar-link ${activeTab === 'MyBadges' ? 'active' : ''}`}
        onClick={() => handleTabClick('ProfessionalMyBadges')}
      >
        My Badges
      </button>
    </aside>
    <div className="profile-content">
      {renderContent()}
    </div>
    </div>

    </>
  )
}

export default ProfessionalMyProfile
