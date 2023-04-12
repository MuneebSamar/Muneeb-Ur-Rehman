import React from "react";
import { featuredPortfolio } from "../json";
import { cloneDeep } from "lodash";

export default function Featured({ getHeader }) {
    const portfolio = cloneDeep(featuredPortfolio);
    const categories = ['all', ...new Set(featuredPortfolio.map((item) => item.tag))];

  return (
    <section className="site-section" id="section-portfolio">
      <div className="container">
        {getHeader("Featured", "Portfolio")}
        <div className="filters">
            <ul>
                {categories.map((tag, index) => (
                    <li data-filter={tag === 'all' ? "*" : '.'+tag} className={`${tag === 'all' && 'active'}`} key={index}>{tag}</li>
                ))}
            </ul>
        </div>
        <div className="filters-content">
          <div className="row grid">
            {portfolio.map((item, index) => (
              <div
                className={`single-portfolio col-sm-4 all ${item?.tag}`}
                key={index}
              >
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg"></div>
                    <img
                      className="image img-fluid "
                      src={require("../../images/" + item?.img)}
                      alt=""
                    />
                  </div>
                  <a href="images/p1.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
								</div>
							</a>     
                </div>
                <div className="p-inner">
                  <h4>{item?.title}</h4>
                  <div className="cat">{item?.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
