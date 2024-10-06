import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works,Works2 ,Works3 , StarsCanvas } from "./components";

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
            <Works2 />
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
