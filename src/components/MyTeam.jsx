import React from 'react'
import image from "../assets/images/download.jpg"
const myteam = [
    {
      id: 1,
      name: "John Doe",
      role: "Project Manager",
      bio: "John is responsible for overseeing the project and ensuring that it stays on track. He has extensive experience in project management and team coordination.",
      photo: image, // URL or path to a photo of the team member
      linkedin: "https://www.linkedin.com/in/johndoe" // Optional: LinkedIn profile URL
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Developer",
      bio: "Jane leads the development team, focusing on backend and frontend architecture. She has a strong background in full-stack development and problem-solving.",
      photo: image, // URL or path to a photo of the team member
      linkedin: "https://www.linkedin.com/in/janesmith" // Optional: LinkedIn profile URL
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "UI/UX Designer",
      bio: "Alice designs the user interface and user experience, ensuring the project is visually appealing and user-friendly. She excels in graphic design and user research.",
      photo: image, // URL or path to a photo of the team member
      linkedin: "https://www.linkedin.com/in/alicejohnson" // Optional: LinkedIn profile URL
    },
    {
      id: 4,
      name: "Bob Brown",
      role: "Quality Assurance",
      bio: "Bob is in charge of testing the project to ensure it meets quality standards. He has a keen eye for detail and experience in manual and automated testing.",
      photo: image, // URL or path to a photo of the team member
      linkedin: "https://www.linkedin.com/in/bobbrown" // Optional: LinkedIn profile URL
    }
    // Add more team members as needed
  ];
  

const MyTeam = () => {
  return (
    <div className="team-container">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {myteam.map(member => (
          <div key={member.id} className="team-member-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
            {member.linkedin && (
              <a href={member.linkedin} className="team-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTeam
