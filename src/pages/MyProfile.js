import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import MySkills from '../components/MySkills';
import MyProjects from '../components/MyProjects';
import MyTeam from '../components/MyTeam';
import image from "../assets/images/image-badge.jpg"
import ProjectsICollaborate from '../components/ProjectsICollaborate';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAward, faStar, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';
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
  

const MyProfile = () => {

    const [activeTab, setActiveTab] = useState('MySkills');
    

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
      case 'MySkills':
        return <MySkills/>
      case 'MyProjects':
        return <MyProjects/>
      case 'MyTeam':
        return <MyTeam/>
      case 'ProjectsICollaborate':
        return <ProjectsICollaborate/>;
      case 'MyBadges':
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
    className={`sidebar-link ${activeTab === 'MySkills' ? 'active' : ''}`}
    onClick={() => handleTabClick('MySkills')}
  >
    My Skills
  </button>
  <button
    className={`sidebar-link ${activeTab === 'MyProjects' ? 'active' : ''}`}
    onClick={() => handleTabClick('MyProjects')}
  >
    My Projects
  </button>
  <button
    className={`sidebar-link ${activeTab === 'MyTeam' ? 'active' : ''}`}
    onClick={() => handleTabClick('MyTeam')}
  >
    My Team
  </button>
  <button
    className={`sidebar-link ${activeTab === 'ProjectsICollaborate' ? 'active' : ''}`}
    onClick={() => handleTabClick('ProjectsICollaborate')}
  >
    Projects I Collaborate
  </button>
  <button
    className={`sidebar-link ${activeTab === 'MyBadges' ? 'active' : ''}`}
    onClick={() => handleTabClick('MyBadges')}
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

export default MyProfile
