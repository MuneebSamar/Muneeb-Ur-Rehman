import Home from "./Home";
import Featured from "./featured";
import Resume from "./resume";
import About from "./about";
import Testimonial from "./testimonial";
import Services from "./services";
import Blogs from "./blogs";
import Contact from "./contact";
export default function Portfolio() {
    function getHeader(first, last) {
        return (
            <div className="row">
            <div className="section-heading text-center col-md-12">
              <h2>
                {first} <strong>{last}</strong>
              </h2>
            </div>
          </div>
        );
    }
  return (
    <>
      <Home />
      <Featured getHeader={getHeader} />
      <Resume getHeader={getHeader} />
      <About getHeader={getHeader} />
      <Testimonial getHeader={getHeader} />
      <Services getHeader={getHeader} />
      <Blogs getHeader={getHeader} />
      <Contact getHeader={getHeader} />
    </>
  );
}