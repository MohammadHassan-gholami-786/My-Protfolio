import React from "react";

export default function Projects() {



      const projectsList = [
    {
      id: 1,
      title: "Interior Design",
      description: "We are a interior design service that focus on what's best for your home and what's best for you!",
      image: "/InteriorDesign.png",
      status: "✓ Css and Html",   
      link: "https://sharefi-umber.vercel.app/"
    },
    {
      id: 2,
      title: "Secondhand Marketplace",
      description: "A web site for selling Secondhand products and buying Secound products . ",
      image: "/SecondhandMarketplace.png",
      status: "✓ By Java script, Css , Html and React",
      link: "https://secondhand-marketplace-three.vercel.app/"
    },
    {
      id: 3,
      title: "Br-Architects",
      description: "A professional architectural design and planning showcase platform for modern building structures.",
      image: "/BrArchitects.png",
      status: "✓ Css and Html Verified",
      link: "https://br-architect-psi.vercel.app/",
    },
     {
      id: 4,
      title: "Style-Farda",
      description: "A profeesional site for tailors to control there orders better.",
      image: "/public/stylefarda.png",
      status: "✓By React. react-router-dom,tailwindcss,react-icons,e t c ...",
      link: "https://style-farda.vercel.app/",
    },
  ];

  
  
  

  return (
    <div>

      <h2 className="section-header">Verified Course Portfolio</h2>
           <div className="course-grid">
        {projectsList.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noreferrer" className="portfolio-card">
            <div className="card-image-view" style={{ backgroundImage: `url(${project.image})` }}></div>
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
