import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const getData = () => {
    fetch("/portafolio_shared_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Hero sharedData={data} />
    </div>
  );
}

export default App;
