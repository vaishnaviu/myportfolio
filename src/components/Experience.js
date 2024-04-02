// Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Software Developer</h3>
        <p>Human-Computer Interaction Lab, Santa Clara University</p>
        <p>Santa Clara, CA, USA | Jun 2023 - Present</p>
        <ul>
          <li>Streamlined platform access by transitioning from desktop-based Electron to web-based Node.js hosted on AWS.</li>
          <li>Built Search & CSV-Download APIs to scrape the Google Play Store, address case-sensitivity & duplication.</li>
          <li>Implemented a custom similarity scoring algorithm to align search results with Google Play Store.</li>
          <li>Achieved a 90% acceleration in data retrieval & an 8-fold increase in search result count.</li>
          <li>Generated new customer acquisitions through the presentation of the MVP version of the web app at the SoE Annual Research Showcase, demonstrating its value proposition.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Senior Software Engineer</h3>
        <p>Accenture: ASCG, Consumer Goods</p>
        <p>Bangalore, India | Sep 2017 - Sep 2022</p>
        <ul>
          <li>Developed idempotent & fault-tolerant software design & architecture in ASP.NET (MVC) for a CRM system.</li>
          <li>Automated batch jobs with JIL scripting, resulting in a 1.5x improvement in system performance.</li>
          <li>Optimized background processes and SQL queries, boosting application speed by 35%.</li>
          <li>Led a team of engineers through effective planning and delegation of user stories.</li>
          <li>Customized Salesforce Dashboards and Real-Time Reports for enhanced data visualization.</li>
          <li>Integrated with SAP system using REST APIs for data extraction and analysis (ETL).</li>
          <li>Conducted rigorous web app testing and ensured timely SQL server security upgrades.</li>
          <li>Proficient in translating business requirements, driving cross-functional strategy and sprint planning.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;