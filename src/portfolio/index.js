import Home from "./Home";
import Featured from "./featured";
import Resume from "./resume";
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
    </>
  );
}