
import React from "react";

export default function Skills() {
  const coreTechSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Router DOM",
    "Tailwind CSS",
  ];

  const abilities = [
    {
      title: "Responsive Websites",
      description:
        "I can build websites that adapt to mobile phones, tablets, laptops, and desktop computers.",
    },
    {
      title: "Form Validation",
      description:
        "I can create forms that validate names, phone numbers, and email addresses and display error messages for invalid input.",
    },
    {
      title: "Interactive Interfaces",
      description:
        "I can create interactive buttons, navigation menus, and forms using React and JavaScript.",
    },
    {
      title: "Page Navigation",
      description:
        "I can use React Router DOM to navigate between pages without reloading the entire website.",
    },
    {
      title: "Modern Web Design",
      description:
        "I can use CSS to create attractive, organized, and user-friendly website layouts.",
    },
    {
      title: "Reusable Components",
      description:
        "I can build reusable React components to keep website code organized.",
    },
  ];

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
