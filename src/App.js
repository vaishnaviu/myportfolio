// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience.js';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
