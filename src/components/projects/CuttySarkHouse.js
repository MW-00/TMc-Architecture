import React from "react";
import Project from "../Project";
import Projects from "../Projects";
import { Link, NavLink } from "react-router-dom"

import img1 from "../../images/project images/00 Cutty Sark House/Cutty Sark - exterior - 14 09 2023 comporess.jpg"
import img2 from "../../images/project images/00 Cutty Sark House/Cutty Sark -interior compressed.jpg"
const CuttySarkHouse = () => {
    return (
        <div>

            {/* <img src={img1} className="ratio ratio-16x9 splash mb-5" />
            <img src={img2} className="ratio ratio-16x9 splash" /> */}


            <div className="row g-5">
                <div className="col-12 col-lg-8 d-flex flex-column">
                    <img src={img1} className="ratio ratio-16x9 splash mb-5"></img>
                    <img src={img2} className="ratio ratio-16x9 splash"></img>
                </div>
                <div className="col-12 col-lg-4">
                    <h2 className="">CUTTY SARK HOUSE</h2>
                    {/* <h6 className="">{type}</h6> */}
                    {/* <p>{description1}</p> */}
                </div>
                {/* {children} */}
                <div className="mb-3 text-end"> <NavLink className="nav-link" to="/projects">Back to projects</NavLink></div>
                <hr className="mb-5" />
                <h5>
                    View Other projects:
                </h5>
                <Projects />
            </div>

            {/* <Project title="SKATE SPACE // JERSEY"
        image={img1}
        type="Community"
        description1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis officia corrupti ipsa adipisci amet eos facilis non ex quo quas accusantium quos doloribus cupiditate voluptatem suscipit asperiores molestias quia error animi, perferendis similique. Iure quae, eum soluta et asperiores ex! Unde, voluptatibus quasi a repellat nobis minus mollitia quaerat dignissimos molestiae, aliquam iusto nihil omnis quas earum adipisci quibusdam sed voluptatem. Optio harum ab laudantium vero similique, sed saepe iste error in sit quidem molestias doloribus ducimus culpa? Fugit, incidunt quasi dolor est libero, ab quas debitis nihil iste consectetur asperiores reiciendis iusto, eos quia natus pariatur!"
       /> */}

            <div className="mb-5"></div>
            <hr className="mb-5" />
        </div>
    );

}

export default CuttySarkHouse;