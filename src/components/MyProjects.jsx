import React from 'react'
import image from "../assets/images/my-project-img.webp"

const projects = [
    {
      id: 1,
      title: "Project Title",
      description: "A brief description of the project, including its purpose and key features.",
      technologies: ["React", "Node.js", "MongoDB"], // List of technologies used
      startDate: "2024-01-01", // Start date in YYYY-MM-DD format
      endDate: "2024-06-01", // End date in YYYY-MM-DD format (if applicable)
      status: "Completed", // Can be "Completed", "In Progress", or "Not Started"
      role: "Lead Developer", // Role or responsibility in the project
      link: "https://example.com/project", // URL to the project or its repository
      image: image // URL to a project-related image or screenshot
    },
    {
        id: 1,
        title: "Project Title",
        description: "A brief description of the project, including its purpose and key features.",
        technologies: ["React", "Node.js", "MongoDB"], // List of technologies used
        startDate: "2024-01-01", // Start date in YYYY-MM-DD format
        endDate: "2024-06-01", // End date in YYYY-MM-DD format (if applicable)
        status: "Completed", // Can be "Completed", "In Progress", or "Not Started"
        role: "Lead Developer", // Role or responsibility in the project
        link: "https://example.com/project", // URL to the project or its repository
        image:image  // URL to a project-related image or screenshot
      },
      {
        id: 1,
        title: "Project Title",
        description: "A brief description of the project, including its purpose and key features.",
        technologies: ["React", "Node.js", "MongoDB"], // List of technologies used
        startDate: "2024-01-01", // Start date in YYYY-MM-DD format
        endDate: "2024-06-01", // End date in YYYY-MM-DD format (if applicable)
        status: "Completed", // Can be "Completed", "In Progress", or "Not Started"
        role: "Lead Developer", // Role or responsibility in the project
        link: "https://example.com/project", // URL to the project or its repository
        image: image // URL to a project-related image or screenshot
      },
      {
        id: 1,
        title: "Project Title",
        description: "A brief description of the project, including its purpose and key features.",
        technologies: ["React", "Node.js", "MongoDB"], // List of technologies used
        startDate: "2024-01-01", // Start date in YYYY-MM-DD format
        endDate: "2024-06-01", // End date in YYYY-MM-DD format (if applicable)
        status: "Completed", // Can be "Completed", "In Progress", or "Not Started"
        role: "Lead Developer", // Role or responsibility in the project
        link: "https://example.com/project", // URL to the project or its repository
        image: image // URL to a project-related image or screenshot
      },
      {
        id: 1,
        title: "Project Title",
        description: "A brief description of the project, including its purpose and key features.",
        technologies: ["React", "Node.js", "MongoDB"], // List of technologies used
        startDate: "2024-01-01", // Start date in YYYY-MM-DD format
        endDate: "2024-06-01", // End date in YYYY-MM-DD format (if applicable)
        status: "Completed", // Can be "Completed", "In Progress", or "Not Started"
        role: "Lead Developer", // Role or responsibility in the project
        link: "https://example.com/project", // URL to the project or its repository
        image:  image// URL to a project-related image or screenshot
      },
       {
        id: 1,
        title: "Project Title",
        description: "A brief description of the project, including its purpose and key features.",
        technologies: ["React", "Node.js", "MongoDB"], // List of technologies used
        startDate: "2024-01-01", // Start date in YYYY-MM-DD format
        endDate: "2024-06-01", // End date in YYYY-MM-DD format (if applicable)
        status: "Completed", // Can be "Completed", "In Progress", or "Not Started"
        role: "Lead Developer", // Role or responsibility in the project
        link: "https://example.com/project", // URL to the project or its repository
        image:image  // URL to a project-related image or screenshot
      },


  ];

const MyProjects = () => {
  return (
    <div className="projects-container">
    {projects.map(project => (
      <div key={project.id} className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-details">
            <span className="project-tech">Tech: {project.technologies.join(', ')}</span>
            <span className="project-role">Role: {project.role}</span>
            <span className="project-status">Status: {project.status}</span>
          </div>
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    ))}
  </div>
  )
}

export default MyProjects
