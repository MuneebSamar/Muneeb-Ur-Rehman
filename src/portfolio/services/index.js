import { services } from "../json";
import { cloneDeep } from "lodash";
export default function Services({ getHeader }) {
  const servicesData = cloneDeep(services);
  return (
    <section className="site-section pb-0" id="section-services">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>
                My <strong>Services</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData?.map((item, index) => (
            <div
              key={item?.id + index}
              className="col-md-6 col-lg-4 text-center mb-5"
            >
              <div
                className="site-service-item site-animate"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <span className={`${item?.icon}`}></span>
                </span>
                <h3 className="mb-4">{item?.title}</h3>
                <p>{item?.description}</p>
                <p>
                  <a href="#" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
