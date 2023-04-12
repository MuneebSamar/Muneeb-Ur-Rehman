import { blogs } from "../json";
import { cloneDeep } from "lodash";
export default function Blogs({ getHeader }) {
  const blogsData = cloneDeep(blogs);
  return (
    <section className="site-section" id="section-blog">
      <div className="container">
        {getHeader("My", "Blogs")}
        <div className="row">
          {blogsData?.map((item, index) => (
            <div key={item?.id + index} className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-entry">
                <a href="#test">
                  <img
                    src={require(`../../images/${item?.img}`)}
                    alt="placeholder"
                    className="img-fluid"
                  />
                </a>
                <div className="blog-entry-text">
                  <h3>
                    <a href="#test">{item?.title}</a>
                  </h3>
                  <p className="mb-4">{item?.description}</p>

                  <div className="meta">
                    <a href="#test">
                      <span className="icon-calendar"></span> {item?.date}
                    </a>
                    <a href="#test">
                      <span className="icon-bubble"></span> {item?.comments}{" "}
                      Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
