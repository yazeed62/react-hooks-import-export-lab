import React from "react";
import NavBar from "./NavBar";
import {username,city} from "./Home";
import {image} from "./About";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
