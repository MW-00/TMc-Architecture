import React from "react"
import { Form, Link } from "react-router-dom"
import ProjectThumbnail from "./ProjectThumbnail"

//thumbnail images
import splash1 from "../images/splash screen images/splash (1).jpg"
import cuttySark from "../images/project images/00 Cutty Sark House/Cutty Sark thumbnail2.jpg"
import skateSpace from "../images/project images/02 Skate Space/Marcin CGI/skatespace thumbnail.jpg"
import zincExtension from "../images/project images/03 Zinc Extension/Zinc Extension thumbnail.jpg"
import cedarExtension from "../images/project images/01 Cedar Extension/Cedar Extension thumbnail.jpg"
import robertsportCommunityCentre from "../images/project images/04 Robertsport Community Centre/Images/Robertsport thumbnail.jpg"
import listedFarmConversion from "../images/project images/05 Listed Building Conversion/Listed Building thumbnail.jpg"
import steppedHouse from "../images/project images/06 Stepped House/steppedhouse thumbnail.jpg"
import netZeroEstate from "../images/project images/07 Net-Zero Estate/netzero thumbnail.jpg"
import school4Burma from "../images/project images/08 School 4 Burma/Marcin CGI + Boards/school4burma thumbnail.jpg"


const Projects = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <section id="gallery" className="">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  g-5 text-center">

                <Link to="/projects/cuttysarkhouse">
                    <ProjectThumbnail title="Cutty Sark House" type="" image={cuttySark} />
                </Link>

                <Link to="/projects/zincextension">
                    <ProjectThumbnail title="Zinc Extension" type="" image={zincExtension} />
                </Link>

                <Link to="/projects/skatespace">
                    <ProjectThumbnail title="Skate Space" type="" image={skateSpace} />
                </Link>

                {/* also known as CEDAR EXTENSION */}
                <Link to="/projects/larchextension">
                    <ProjectThumbnail title="Larch Extension" type="" image={cedarExtension} />
                </Link>

                <Link to="/projects/robertsportcommunitycentre">
                    <ProjectThumbnail title="Robertsport Community Centre" type="" image={robertsportCommunityCentre} />
                </Link>

                <Link to="/projects/listedfarmconversion">
                    <ProjectThumbnail title="Listed Farm Conversion" type="" image={listedFarmConversion} />
                </Link>

                <Link to="/projects/steppedhouse">
                    <ProjectThumbnail title="Stepped House" type="" image={steppedHouse} />
                </Link>

                <Link to="/projects/netzeroestate">
                    <ProjectThumbnail title="Net-Zero Estate" type="" image={netZeroEstate} />
                </Link>

                <Link to="/projects/myanmarschool">
                <ProjectThumbnail title="Myanmar School" type="" image={school4Burma} />
                </Link>

            </div>
        </section>

    );
}



export default Projects;