import React from "react";
import backgroundImage from "../../images/image_1.jpg";
import { navList } from "../../portfolio/json";
import { cloneDeep } from "lodash";
export default function Home() {
  const navigation = cloneDeep(navList);
  //Faizan Aslam First Commit
  return (
    <>
      <nav
        className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
        id="pb-navbar"
      >
        <div className="container">
          <div
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              {navigation.map((nav, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={nav.link}>
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <section
        className="site-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row intro-text align-items-center justify-content-center">
            <div className="col-md-10 text-center pt-5">
              <h1 className="site-heading site-animate">
                Hello, I'm{" "}
                <strong className="d-block">Muneeb Ur Rehman</strong>
              </h1>
              <strong className="d-block text-white text-uppercase letter-spacing">
                and this is My Rezume
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
