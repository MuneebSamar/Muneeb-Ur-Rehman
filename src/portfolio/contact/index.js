import { contacts } from "../json";
import { cloneDeep } from "lodash";
export default function Contact() {
  const contactData = cloneDeep(contacts);
  let contactKeys = Object.keys(contactData?.contact);
  let socialKeys = Object.keys(contactData?.social);
  return (
    <>
      <section className="site-section" id="section-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2>
                  Get <strong>In Touch</strong>
                </h2>
              </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0">
              <form action="" className="site-form">
                <h3 className="mb-5">Get In Touch</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-4"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control px-3 py-4"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control px-3 py-4"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group mb-5">
                  <textarea
                    className="form-control px-3 py-4"
                    cols="30"
                    rows="10"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary  px-4 py-3"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-5 pl-md-5">
              <h3 className="mb-5">My Contact Details</h3>
              <ul className="site-contact-details">
                {contactKeys?.map((key) => (
                  <li key={key}>
                    <span className="text-uppercase">{key}</span>
                    {contactData?.contact[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          {/* <div className="row mb-5">
              <p className="col-12 text-center">
                Copyright &copy;{" "}
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  className="text-primary"
                >
                  Colorlib
                </a>
              </p>
            </div> */}
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <p>
                {socialKeys?.map((key) => {
                  let icon;
                  if (key === "twitter") {
                    icon = "twitter";
                  } else if (key === "instagram") {
                    icon = "instagram2";
                  } else if (key === "linkedin") {
                    icon = "linkedin2";
                  } else if (key === "facebook") {
                    icon = "facebook2";
                  }
                  return (
                    <a
                      key={key}
                      href={contactData?.social[key]}
                      target="blank"
                      className="social-item"
                    >
                      <span className={`icon-${icon}`}></span>
                    </a>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
