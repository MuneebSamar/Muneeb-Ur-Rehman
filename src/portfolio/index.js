import Home from "./Home/index.js";
import Featured from "./featured/index.js";
import Resume from "./resume/index.js";
import About from "./about/index.js";
import Testimonial from "./testimonial/index.js";
import Services from "./services/index.js";
import Blogs from "./blogs/index.js";
import Contact from "./contact/index.js";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingPage from "../pages/loading.js";
export default function Portfolio() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    useEffect(() => {
      axios.get("http://localhost/my_rezume/get_rezume.php?id=7").then((res) => {
        if (res?.data?.code == 0) {
        setUserData(res?.data?.data?.json_data);
        // setLoading(false);
        } 
      });
    }, []);
    if (!userData) {
      return <div>Loading...</div>;
    }
    if (loading === true) {
      return <LoadingPage />;
    }
  return (
    <div data-spy="scroll" data-target="#pb-navbar" data-offset="200">
      <Home userData={userData} />
      <Featured getHeader={getHeader} userData={userData} />
      <Resume getHeader={getHeader} />
      <About getHeader={getHeader} />
      <Testimonial getHeader={getHeader} />
      <Services getHeader={getHeader} />
      <Blogs getHeader={getHeader} />
      <Contact getHeader={getHeader} />
    </div>
  );
}