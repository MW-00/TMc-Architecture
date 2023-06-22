import React from "react"
import { Form, Link } from "react-router-dom"
import ProjectThumbnail from "./ProjectThumbnail"
//thumbnail images
import splash1 from "../images/splash screen images/splash (1).jpg"
import skateSpace from "../images/project images/02 Skate Space/Marcin CGI/Skatepatk - view 1 - 16 06 2023 B.jpg"
import zincExtension from "../images/project images/03 Zinc Extension/Placeholder.jpg"
import robertsportCommunityCentre from "../images/project images/04 Robertsport Community Centre/Images/RP_Biz copy.jpg"
import listedBuildingConversion from "../images/project images/05 Listed Building Conversion/placeholder.jpg"
import steppedHouse from "../images/project images/06 Stepped House/3.jpg"
import netZeroEstate from "../images/project images/07 Net-Zero Estate/CGI Gascoigne.jpg"

const Projects = () => {
    return (
        <section id="gallery" className="">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  g-5 text-center">
                <ProjectThumbnail title="Cedar Extension" type="" image={splash1} />
                <Link to="/projects/skatespace">
                    <ProjectThumbnail title="Skate Space" type="" image={skateSpace} />
                </Link>
                <ProjectThumbnail title="Zinc Extension" type="" image={zincExtension} />
                <ProjectThumbnail title="Robertsport Community Centre" type="" image={robertsportCommunityCentre} />
                <ProjectThumbnail title="Listed Building Conversion" type="" image={listedBuildingConversion} />
                <ProjectThumbnail title="Stepped House" type="" image={steppedHouse} />
                <ProjectThumbnail title="Net-Zero Estate" type="" image={netZeroEstate} />
                <ProjectThumbnail title="School 4 Burma" type="" image={splash1} />
                <ProjectThumbnail title="JYAF Sketch Club" type="" image={splash1} />
            </div>
        </section>

    );
}



export default Projects;