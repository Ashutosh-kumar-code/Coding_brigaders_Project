import React from 'react'

const studentHelped = [
  {
    studentId: '1',
    studentName: 'John Doe',
    projectTitle: 'AI Chatbot Development',
    description: 'Developed a chatbot using AI techniques under mentorship.',
    skillsLearned: ['JavaScript', 'Python', 'Machine Learning'],
    mentorName: 'Dr. John Doe',
    status: 'Completed',
    startDate: '2023-01-15',
    endDate: '2023-06-15',
    feedback: 'John showed exceptional dedication and quick learning skills.'
  },
  {
    studentId: '2',
    studentName: 'Jane Smith',
    projectTitle: 'E-commerce Website',
    description: 'Created a full-stack e-commerce website with shopping cart and payment integration.',
    skillsLearned: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    mentorName: 'Ms. Jane Smith',
    status: 'Completed',
    startDate: '2022-09-01',
    endDate: '2023-01-01',
    feedback: 'Jane delivered excellent work and demonstrated strong technical skills.'
  }
];

const ProfessStudentHelped = () => {

  return (
    <div className="student-helped-container">
      <h1>Students Helped</h1>
      <div className="students">
        {studentHelped.map(student => (
          <div key={student.studentId} className="student-card">
            <h2>{student.studentName}</h2>
            <p className="project-title"><strong>Project:</strong> {student.projectTitle}</p>
            <p className="description">{student.description}</p>
            <p><strong>Skills Learned:</strong> {student.skillsLearned.join(', ')}</p>
            <p><strong>Mentor:</strong> {student.mentorName}</p>
            <p><strong>Status:</strong> {student.status}</p>
            <p><strong>Start Date:</strong> {student.startDate}</p>
            <p><strong>End Date:</strong> {student.endDate}</p>
            <p className="feedback"><strong>Feedback:</strong> {student.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessStudentHelped;