import React from "react";
import { aboutData } from "../json";
import { cloneDeep } from "lodash";

export default function About() {
    const about = cloneDeep(aboutData);
    const { short_description, description, img} = about;
    return (
        <section className="site-section" id="section-about">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
              <img
                src={require(`../../images/${img}`)}
                alt="placeholder"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 pl-lg-5">
              <div className="section-heading">
                <h2>
                  About <strong>Me</strong>
                </h2>
              </div>
              <p className="lead">
                {short_description}
              </p>
              <p className="mb-5  ">
                {description}
              </p>

              <p>
                <a
                  href="#section-contact"
                  className="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                >
                  Hire Me
                </a>
                <a href="#test" className="btn btn-secondary px-4 py-2 btn-sm">
                  Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}