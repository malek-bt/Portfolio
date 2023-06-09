import React from "react";
import mail from "../images/mail.png";
import mobile from "../images/mobile.png";
import "../styles/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        window.location.reload(true);
        toast("Email send successfully!");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="h2">
        Contact me <hr></hr>
      </h2>

      <div className="contact-cards">
        <div className="contact-card">
          <img src={mail} alt="mail icon" className="contact-icon"></img>
          <a href="mailto:malekbentaher3@gmail.com">malekbentaher3@gmail.com</a>
        </div>
        <div className="contact-card">
          <img src={mobile} alt="mobile icon" className="contact-icon"></img>
          <a href="tel:29164498">+216 29-164-498</a>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-card">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            autoComplete="off"
            required
            minlength={4}
          ></input>
        </div>

        <div className="contact-card">
          <input
            type="email"
            placeholder="Your Email"
            autoComplete="off"
            name="from_email"
            required
          ></input>
        </div>

        <div className="contact-card">
          <textarea
            placeholder="Your Message"
            name="message"
            required
            minlength={10}
          ></textarea>
        </div>

        <button type="submit" className="btn1" value="send">
          Send Message
        </button>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid green",
              padding: "12px",
              color: "green",
            },
          }}
        />
      </form>
    </section>
  );
};

export default Contact;
