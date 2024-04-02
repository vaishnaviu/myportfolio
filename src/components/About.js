import React from 'react';
import vaishnaviImage from '../vaishnavi_upadhye.jpg';

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
        <p>
          Contact:<br />
          Email: vaishnaviu1@outlook.com<br />
          LinkedIn: <a href="https://www.linkedin.com/in/vaishnaviupadhye/">Vaishnavi Upadhye</a><br />
          GitHub: <a href="https://github.com/vaishnaviu">vaishnaviu</a>
        </p>
        <p>
          Education:<br />
          Santa Clara University, CA, USA | Masters in Computer Science | GPA: 3.7/4.0 | Sep 2022 - Jun 2024<br />
          Visvesvaraya Technological University, Bangalore, India | Bachelors in Electronics and Communication Engineering | GPA: 3.7/4.0 | Aug 2013 – Jun 2017
        </p>
      </div>
    </section>
  );
}

export default About;