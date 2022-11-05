import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <h1 className="ContactUs-title">Leave us a message!</h1>
      <form className="ContactUs-form" action="">
        <input className="ContactUs-name" type="text" placeholder="Name:" />
        <input placeholder="Email:" className="ContactUs-email" type="email" required />
        <textarea
          placeholder="Type your message here..."
          name=""
          id=""
          cols="30"
          rows="10"
          className="ContactUs-message"
          required
        ></textarea>
        <button type="enter" className="ContactUs-button">
          Send!
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
