import { testimonial } from "../json";
import { cloneDeep } from "lodash";
export default function Testimonial() {
  const testimonialData = cloneDeep(testimonial);
  return (
    <section className="site-section" id="section-testimonial">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>
                Client <strong>Testimonial</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {testimonialData?.map((item, index) => (
            <div key={index + item?.id} className="col-md-6">
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img
                    src={require(`../../images/${item?.img}`)}
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </div>
                <blockquote className="block-47-quote">
                  <p>&ldquo;{item?.description}&rdquo;</p>
                  <cite className="block-47-quote-author">
                    &mdash; {item?.name} <a href="#">{item?.designation}</a>
                  </cite>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
