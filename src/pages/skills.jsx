
import React from "react";
import skillsData from "../../content/skills.json";

export default function Skills() {
  const coreTechSkills = skillsData.coreTechSkills || [];
  const abilities = skillsData.abilities || [];

  return (
    <div className="skills-page">
      <h2 className="section-header">Technical Competencies</h2>

      <div className="skills-matrix">
        {coreTechSkills.map((skill) => (
          <div key={skill} className="skill-node">
            {skill}
          </div>
        ))}
      </div>

      <section className="abilities-section">
        <h2 className="section-header">What I Can Do</h2>

        <div className="abilities-grid">
          {abilities.map((ability) => (
            <article className="ability-card" key={ability.title}>
              <h3>{ability.title}</h3>
              <p>{ability.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
