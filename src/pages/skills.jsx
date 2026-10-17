import React from "react";

export default function Skills() {
  const coreTechSkills = [
    "",
    "",
    "",
    "",
    "Css",
    "Html",
    "React",
    "javascript"
  ];

  return (
    <div>
      <h2 className="section-header">Technical Competencies</h2>
      <div className="skills-matrix">
        {coreTechSkills.map((skill, index) => (
          <div key={index} className="skill-node">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
