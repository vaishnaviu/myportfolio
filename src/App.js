// App.js
import React from 'react';
// import Header from './components/Header';
import About from './components/About';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar.js';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <NavigationBar />
      <main>

        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
