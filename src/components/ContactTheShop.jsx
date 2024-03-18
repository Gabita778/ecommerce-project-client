import { useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const ContactTheShop = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.prevent.de;
  };

  const hrStyle2 = {
    backgroundColor: "black",
    height: "1px",
    width: "500px",
    border: "none",
    margin: " auto",
  };

  return (
    <section className="shop-info">
      <div className="container-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427314.743289817!2d7.783974962500005!3d53.550188299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18fab7259df4d%3A0xa8dbbb4d5e740b96!2sDCI%20Digital%20Career%20Institute!5e0!3m2!1sen!2sde!4v1699195858305!5m2!1sen!2sde"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      <div>
        <div className="contact">
          <h3>Contact</h3>

          <div className="contact-details">
            <p>Dci, Wandalenweg 30, 20097 Hamburg</p>
            <p>
              {" "}
              <a href="tel:015426254258"> +495426254258</a>
            </p>
            <p>
              Our team is available Monday to Saturday from 10am to 7pm{" "}
              <br></br>to answer your questions in German, French, Italian or
              English.
            </p>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label></label>
          <input
            type="text"
            name="name"
            placeholder=" Name"
            label="Name"
            required
          />
          <hr style={hrStyle2} />
          <label></label>
          <input
            type="text"
            name="firstName"
            placeholder="Last Name"
            label="Last Name"
            required
          />
          <hr style={hrStyle2} />
          <label></label>
          <input
            type="email"
            name="user_email"
            className="form-control p-3"
            placeholder="Enter Your Email"
            aria-label="Enter your Your Email"
            aria-describedby="basic-addon2"
            required
          />
          <hr style={hrStyle2} />
          <label htmlFor="floatingTextarea"></label>
          <textarea
            style={{ width: "13.2rem" }}
            name="message"
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <hr style={hrStyle2} />
          <button type="Submit">Submit</button>
        </form>
        <div className="icons">
          <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
            {" "}
            <FaXTwitter />
          </a>
          <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
            {" "}
            <BsFacebook />
          </a>
          <a target="_blank" href="https://www.instagram.com" rel="noreferrer">
            {" "}
            <BsInstagram />
          </a>
          <a target="_blank" href="https://www.linkedin.com" rel="noreferrer">
            {" "}
            <BsLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactTheShop;
