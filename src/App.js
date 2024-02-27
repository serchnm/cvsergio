import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import React from "react";
import { sharedData } from "./mock/shared-data";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Hero sharedData={sharedData} />
      <About sharedData={sharedData} />
    </div>
  );
}

export default App;
