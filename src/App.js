import React, { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Portfolio";

function App() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };
  return (
    <section>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      
      <main className="content">
        <div>{renderPage(currentPage)}</div>
        <footer className="flex-row">
          <Footer></Footer>
        </footer>
      </main>
    </section>
  );
}

export default App;
