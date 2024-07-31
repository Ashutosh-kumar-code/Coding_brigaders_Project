import React from 'react'
const collaborateProjects = [
    {
      projectId: '1',
      projectName: 'AI Chatbot Development',
      description: 'Developing a chatbot using AI techniques to assist users with queries.',
      skillsRequired: ['JavaScript', 'Python', 'Machine Learning'],
      status: 'in progress',
      startDate: '2023-01-15',
      endDate: '2023-06-15'
    },
    {
      projectId: '2',
      projectName: 'E-commerce Website',
      description: 'Creating a full-stack e-commerce website with shopping cart and payment integration.',
      skillsRequired: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      status: 'completed',
      startDate: '2022-09-01',
      endDate: '2023-01-01'
    },
    {
        projectId: '1',
        projectName: 'AI Chatbot Development',
        description: 'Developing a chatbot using AI techniques to assist users with queries.',
        skillsRequired: ['JavaScript', 'Python', 'Machine Learning'],
        status: 'in progress',
        startDate: '2023-01-15',
        endDate: '2023-06-15'
      },
      {
        projectId: '2',
        projectName: 'E-commerce Website',
        description: 'Creating a full-stack e-commerce website with shopping cart and payment integration.',
        skillsRequired: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        status: 'completed',
        startDate: '2022-09-01',
        endDate: '2023-01-01'
      },
      {
        projectId: '1',
        projectName: 'AI Chatbot Development',
        description: 'Developing a chatbot using AI techniques to assist users with queries.',
        skillsRequired: ['JavaScript', 'Python', 'Machine Learning'],
        status: 'in progress',
        startDate: '2023-01-15',
        endDate: '2023-06-15'
      },
      {
        projectId: '2',
        projectName: 'E-commerce Website',
        description: 'Creating a full-stack e-commerce website with shopping cart and payment integration.',
        skillsRequired: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        status: 'completed',
        startDate: '2022-09-01',
        endDate: '2023-01-01'
      }
  ];
  

const ProfessionalProjectsCollaborate = () => {
  return (
    <div className="container">
      <h1>Collaborate Projects</h1>
      <div className="projects">
        {collaborateProjects.map(project => (
          <div key={project.projectId} className="collaborate-project-card">
            <h2>{project.projectName}</h2>
            <p className="description">{project.description}</p>
            <div className="details">
              <p><strong>Skills Required:</strong> {project.skillsRequired.join(', ')}</p>
              <p><strong>Status:</strong> {project.status}</p>
              <p><strong>Start Date:</strong> {project.startDate}</p>
              <p><strong>End Date:</strong> {project.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalProjectsCollaborate
