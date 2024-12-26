import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import EducationExperience from "./Components/Edu-exp";

function App() {
    return (
        <div>
          <Sidebar />
          <Hero />
          <About />
          <Services />
          <EducationExperience />
        </div>
    );
}

export default App;