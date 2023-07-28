import React from "react"
import { Form, Link } from "react-router-dom"
import ProjectThumbnail from "./ProjectThumbnail"

//thumbnail images
import splash1 from "../images/splash screen images/splash (1).jpg"
import cuttySark from "../images/project images/00 Cutty Sark House/Cutty Sark thumbnail2.jpg"
import skateSpace from "../images/project images/02 Skate Space/Marcin CGI/skatespace thumbnail.jpg"
import zincExtension from "../images/project images/03 Zinc Extension/Placeholder thumbnail.jpg"
import robertsportCommunityCentre from "../images/project images/04 Robertsport Community Centre/Images/Robertsport thumbnail.jpg"
import listedBuildingConversion from "../images/project images/05 Listed Building Conversion/placeholder.jpg"
import steppedHouse from "../images/project images/06 Stepped House/steppedhouse thumbnail.jpg"
import netZeroEstate from "../images/project images/07 Net-Zero Estate/netzero thumbnail.jpg"
import school4Burma from "../images/project images/08 School 4 Burma/Marcin CGI + Boards/school4burma thumbnail.jpg"


const Projects = () => {
    return (
        <section id="gallery" className="">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  g-5 text-center">
                <ProjectThumbnail title="Cutty Sark House" type="" image={cuttySark} />
                <ProjectThumbnail title="Cedar Extension" type="" image={splash1} />
                <Link to="/projects/skatespace">
                    <ProjectThumbnail title="Skate Space" type="" image={skateSpace} />
                </Link>
                <ProjectThumbnail title="Zinc Extension" type="" image={zincExtension} />
                <ProjectThumbnail title="Robertsport Community Centre" type="" image={robertsportCommunityCentre} />
                <ProjectThumbnail title="Listed Building Conversion" type="" image={listedBuildingConversion} />
                <ProjectThumbnail title="Stepped House" type="" image={steppedHouse} />
                <ProjectThumbnail title="Net-Zero Estate" type="" image={netZeroEstate} />
                <ProjectThumbnail title="School 4 Burma" type="" image={school4Burma} />
                <ProjectThumbnail title="JYAF Sketch Club" type="" image={splash1} />
            </div>
        </section>

    );
}



export default Projects;