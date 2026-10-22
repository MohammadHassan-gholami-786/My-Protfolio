
import React from "react";

const cards = [
  {
    title: "About Me",
    items: [
      "Name: Mohammad Hassan Gholami",
      "Role: Aspiring Frontend Developer",
      "Interest: Web Development & Design",
      "Focus: Responsive Websites",
    ],
  },
  {
    title: "My Goals",
    items: [
      "Become a professional web developer",
      "Build useful digital experiences",
      "Improve my coding skills",
      "Create real-world projects",
    ],
  },
  {
    title: "My Journey & Skills",
    items: [
      "Started learning web development",
      "Building projects through practice",
      "HTML, CSS & JavaScript",
      "React & Tailwind CSS",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div className="hero-banner">
        <div className="profile-area">
          <div className="avatar-neon-ring">
            <img
              src="/profile.png"
              alt="Mohammad Hassan Gholami Profile"
              className="profile-img"
            />
          </div>
        </div>

        <div className="info-area">
          <h1>Hello, I'm Mohammad Hassan Gholami</h1>
          <h2>Creative Web Developer</h2>
          <p>
            Welcome to my developer interface. I build responsive websites
            with clean code and user-friendly designs.
          </p>
        </div>
      </div>

      <section className="home-cards">
        {cards.map((card) => (
          <article className="home-card" key={card.title}>
            <h2>{card.title}</h2>

            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
