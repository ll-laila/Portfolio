import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar setActiveSection={setActiveSection} />
          <Hero />
        </div>
        {activeSection === "resume" ? (
          <Feedbacks />
        ) : (
          <> 
            <About />
            <Experience />
            <Works />
          </>
        )}
        <div className='relative z-0'>
          {activeSection !== "resume" && (
            <>
              <Contact />
              <StarsCanvas />
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
