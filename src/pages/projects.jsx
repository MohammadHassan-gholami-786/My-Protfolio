import React from "react";
import projectsList from "../../content/projects.json";

export default function Projects() {
  return (
    <div>
      <h2 className="section-header">Verified Course Portfolio</h2>

      <div className="course-grid">
        {projectsList.projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="portfolio-card"
          >
            <div
              className="card-image-view"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            <div className="card-body-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="badge-yellow">{project.status}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
