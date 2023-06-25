import React from "react";
import Projects from "./Projects";

const Project = ({ image, title, type, description1, children }) => {
    return (
        <div className="row g-5">
            <div className="col-12 col-lg-8">
                <img src={image} className="splash"></img>
            </div>
            <div className="col-12 col-lg-4">
                <h2 className="">{title}</h2>
                <h6 className="">{type}</h6>
                <p>{description1}</p>
            </div>
            {children}
            <div className="mb-5"></div>
            <hr className="mb-5" />
            <h5>
                View Other projects:
            </h5>
            <Projects />
        </div>

    );
}


export default Project;