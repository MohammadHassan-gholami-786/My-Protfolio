
import React from "react";

const aboutCards = [
  {
    title: "Who I Am",
    items: [
      "Name: Mohammad Hassan Gholami",
      "Student of Software Engineering",
      "Grade Ten at Jebrail High School, Herat",
      "Passionate about web development",
    ],
  },
  {
    title: "My Journey",
    items: [
      "Started programming on July 3, 2026",
      "Began learning from the basics",
      "Practicing coding through projects",
      "Learning how websites work",
    ],
  },
  {
    title: "My Skills & Ambitions",
    items: [
      "Learning frontend development",
      "Building responsive web interfaces",
      "Dream of creating large-scale web projects",
      "Turning creative ideas into reality",
      "Never give up on learning",
    ],
  },
];

export default function About() {
  return (
    <div className="about-page">
      <h2 className="section-header">About Me</h2>

      <div className="home-cards">
        {aboutCards.map((card) => (
          <article className="home-card" key={card.title}>
            <h3>{card.title}</h3>

            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
