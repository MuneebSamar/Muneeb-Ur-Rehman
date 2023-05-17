import Home from "./Home";
import Featured from "./featured";
import Resume from "./resume";
import About from "./about";
import Testimonial from "./testimonial";
import Services from "./services";
import Blogs from "./blogs";
import Contact from "./contact";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingPage from "./../pages/loading"
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
    useEffect(() => {
      axios.get("http://localhost/my_rezume/get_rezume.php?id=7").then((res) => {
        if (res?.data?.code == 0) {
        setUserData(res?.data?.data?.json_data);
        setLoading(false);
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
      <Home />
      <Featured getHeader={getHeader} />
      <Resume getHeader={getHeader} />
      <About getHeader={getHeader} />
      <Testimonial getHeader={getHeader} />
      <Services getHeader={getHeader} />
      <Blogs getHeader={getHeader} />
      <Contact getHeader={getHeader} />
    </div>
  );
}