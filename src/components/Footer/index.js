import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <hr></hr>
      <div className="flex-row justify-space-around mt-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alex-weghorst/"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/aweghorst">
          <i class="fa fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/aweghorst/"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
