import React from 'react';
import vaishnaviImage from '../vaishnavi_upadhye.png';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="profile">
        <img src={vaishnaviImage} alt="Vaishnavi Upadhye" />
        <p>
          Vaishnavi Upadhye<br />
          Senior Software Engineer with 5 years of experience in Backend development, System integration, Team management, & Agile collaboration. Azure & Salesforce certified, currently pursuing MS in Computer Science. Actively seeking full-time SDE roles
        </p>
      </div>
    </section>
  );
}

export default About;