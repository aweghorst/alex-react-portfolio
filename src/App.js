import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./components/Contact"



function App() {

  return (
    <section>
      <main>
        <Header/>
        <About />
        <Contact/>
      </main>
    </section>
  );
}

export default App;
