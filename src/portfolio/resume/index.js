import React from "react";
export default function Resume ({getHeader}) {
    return (
        <section className="site-section" id="section-resume">
            <div className="container">
                {getHeader("My", "Resume")}
            </div>
        </section>
    );
};