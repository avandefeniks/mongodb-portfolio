import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  const [componentSelected, setComponentSelected] = useState('about');


  function renderPage() {
    if (componentSelected === 'about') {
      return <About />
    }
    else if (componentSelected === 'contact') {
      return <ContactForm />
    }
    else if (componentSelected === 'projects') {
      return <Projects />
    }
    else if (componentSelected === 'resume') {
      return <Resume />
    }
    
  }

  

  return (
    <div>
      <Header setpage={setComponentSelected}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
