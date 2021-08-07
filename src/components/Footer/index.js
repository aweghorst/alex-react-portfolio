import React from "react";

function Footer() {
  return (
    <footer className="footer-container text mb-4">
      <hr></hr>
      <div className="flex-row justify-space-around mt-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alex-weghorst/"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/aweghorst">
          <i className="fa fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/aweghorst/"
        >
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
