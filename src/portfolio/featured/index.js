import React from "react";

export default function Featured({ getHeader, userData }) {
    const categories = ['all', ...new Set(userData?.featured_portfolio?.map((item) => item?.tag))];
console.log(userData);
  return (
    <section className="site-section" style={{height: "72rem"}} id="section-portfolio">
      <div className="container">
        {getHeader("Featured", "Portfolio")}
        <div className="filters">
            <ul>
                {categories?.map((tag, index) => (
                    <li data-filter={tag === 'all' ? "*" : '.'+tag} class={`${tag === 'all' && 'active'} text-capitalize`} key={index}>{tag}</li>
                ))}
            </ul>
        </div>
        <div className="filters-content">
          <div className="row grid">
            {userData?.featured_portfolio?.map((item, id) => (
              <div
                className={`single-portfolio col-sm-4 all ${item?.tag}`}
                key={id}
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
