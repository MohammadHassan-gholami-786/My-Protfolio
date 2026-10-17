import React from "react";

export default function Home() {
  return (
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
          Welcome to my developer interface. I engineer elite responsive front-end systems, clean semantic code infrastructures, and immersive user experiences from the ground up.
        </p>
      </div>
    </div>
  );
}
