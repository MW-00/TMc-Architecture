import React from "react";
import { NavLink } from "react-router-dom";
import Projects from "./Projects";

window.scrollTo({ top: 0, behavior: 'smooth' });
const Project = ({ image1, image2, image3, title, location, description1, description2, description3 }) => {
    return (
        <div>
            <div className="row g-5">
                <div className="col-12 col-lg-8 d-flex flex-column">

                    {image1 ? (
                        <img src={image1} className="ratio ratio-16x9 splash mb-5"></img>)
                        : null}

                    {image2 ? (
                        <img src={image2} className="ratio ratio-16x9 splash mb-5"></img>)
                        : null}

                    {image3 ? (
                        <img src={image3} className="ratio ratio-16x9 splash mb-5"></img>)
                        : null}

                </div>
                <div className="col-12 col-lg-4">
                    <h2>{title}</h2>
                    <h6>{location}</h6>
                    <br />
                    <p>{description1}</p><br />

                    {description2 ? (
                        <div>
                            <h6>9X5 Architecture Responsibilities:</h6>
                            <p>{description2}</p>
                        </div>)
                        : null}

                    <p>{description3}</p>

                </div>
                <div className="mb-3 text-end"> <NavLink className="nav-link" to="/projects">Back to projects</NavLink></div>
                <hr className="mb-5" />
                <h5>
                    View Other projects:
                </h5>
                <Projects />
            </div>

            <div className="mb-5"></div>
            <hr className="mb-5" />
        </div>




    );
}


export default Project;