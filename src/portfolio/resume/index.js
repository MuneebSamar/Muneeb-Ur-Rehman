import React from "react";
import { resumeData } from "../json.js";
export default function Resume({ getHeader }) {
  let keys = Object?.keys(resumeData);
  return (
    <section className="site-section" id="section-resume">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="section-heading text-center">
              <h2>
                My <strong>Resume</strong>
              </h2>
            </div>
          </div>
          {keys?.map((key, index) => (
            <div key={key + index} className="col-md-6">
              <h2 className="mb-5">{key}</h2>
              {resumeData[key]?.map((item, index) => (
                <div key={item?.title + index} className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar"></span>
                    {item?.date}
                  </span>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <span className="school">
                    {item?.institute || item?.compnay}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
