import React from "react";

export default function Projects() {

  const projectsList = [
    {
      id: 1,
      title: "React Live Task Manager Client App",
      description: "A complete client-side system engineered during Lecture 40 with clean custom hooks. Handles reactive CRUD operations and controlled inputs to manage daily server task workflows smoothly without single-page reload delays.",
      image: "https://unsplash.com",
      status: "✓ React API Functional Verified"
    },
    {
      id: 2,
      title: "Java Relational API Database System",
      description: "A structured data management application built using foundational object-oriented logic. Delivers responsive application programming schemas securely to handle full relational queries for the interface layer.",
      image: "https://unsplash.com",
      status: "✓ Java OOP Architecture Verified"
    }
  ];

  return (
    <div>
      <h2 className="section-header">Verified Course Portfolio</h2>
      <div className="course-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="card-image-view" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="card-body-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="badge-yellow">{project.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
