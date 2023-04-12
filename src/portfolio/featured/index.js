import React from "react";
import { featuredPortfolio } from "../json";
export default function Featured({ getHeader }) {
    const [portfolio, setPortfolio] = React.useState(featuredPortfolio);
    const categories = ['All', ...new Set(featuredPortfolio.map((item) => item.tag))];
    const filter = (category) => {
        if (category === 'All') {
            setPortfolio(featuredPortfolio);
            return;
        }
        const filteredData = featuredPortfolio.filter((item) => item.tag === category);
        setPortfolio(filteredData);
    }

  return (
    <section className="site-section" id="section-portfolio">
      <div className="container">
        {getHeader("Featured", "Portfolio")}
        <div className="filters">
            <ul>
                {categories.map((tag, index) => (
                    <li key={index} onClick={() => filter(tag)}>{tag}</li>
                ))}
            </ul>
        </div>
        <div className="filters-content">
          <div className="grid col-span-12">
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
