import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = e => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = e => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
      <h1 id="contact" className="header-text text-center">
        Contact me
      </h1>
      <div className="flex-row">
        <div className="form-box col-6">
          <form
            id="contact-form"
            className="text-center w-100"
            onSubmit={handleSubmit}
          >
            <div className>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
                required
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-box col-3 text-center form-box">
          <h4>Contact Me Directly</h4>
          <p>(512) 914-2389</p>
          <p>alex@weghorst.com</p>
          <div className="flex-row justify-space-around">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/alex-weghorst/"
            >
              <i class="fa fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aweghorst"
            >
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
      </div>
    </section>
  );
}

export default ContactForm;
