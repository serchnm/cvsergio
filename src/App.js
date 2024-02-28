import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import React from "react";
import {
  sharedData,
  about,
  skills,
  footer,
  experience,
} from "./mock/shared-data";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero sharedData={sharedData} />
      <About sharedData={about} />
      <Skills sharedData={skills} />
      <Projects />
      <Experience sharedData={experience} />
      <Footer sharedData={footer} />
    </div>
  );
}

export default App;
