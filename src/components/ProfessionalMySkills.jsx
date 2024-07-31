import React from 'react'
import image from "../assets/images/my-project-img.webp"


const skills = [
    {
      name: "JavaScript",
      level: "Advanced", 
      category: "Programming Language"
    },
    {
      name: "React",
      level: "Advanced",
      category: "Library"
    },
    {
      name: "Node.js",
      level: "Intermediate",
      category: "Runtime Environment"
    },
    {
      name: "Express",
      level: "Intermediate",
      category: "Framework"
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      category: "Database"
    },
    {
      name: "HTML",
      level: "Advanced",
      category: "Markup Language"
    },
    {
      name: "CSS",
      level: "Advanced",
      category: "Styling"
    },
    {
      name: "Git",
      level: "Intermediate",
      category: "Version Control"
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      category: "CSS Framework"
    }
  ];

const ProfessionalMySkills = () => {
  return (
    <div className="skills-container">
    <h2>My Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <h3 className="skill-name">{skill.name}</h3>
          <p className="skill-level">Level: {skill.level}</p>
          <p className="skill-category">Category: {skill.category}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProfessionalMySkills
