import React from "react";
import Project from "../Project";

import img1 from "../../images/project images/08 School 4 Burma/Marcin CGI + Boards/school4burma thumbnail.jpg"
const MyanmarSchool = () => {
    return (
        <div>
            <Project title="MYANMARE SCHOOL"
                location=""
                image1={img1}
                description1={<>
                International design competition held by Building Trust International
                <br />
                <br />
                The open plan arrangement of the school supports the notion that every child within
                every classroom should feel a key part of the school community. The flexible nature
                of the space means that it can support a variety of activities allowing the children to
                learn about a range of complex relationships both with people and their
                surroundings. 
                <br />
                <br />
                The structure for the school would be constructed from a combination of traditional,
                ecological and locally sourced materials. For simplicity of construction, a modular
                treated timber substructure would be used on temporary pad foundations that
                minimise intervention with the ground. The structure has been designed so that it
                can be constructed and deconstructed simply. </> }

            />
        </div>
    );

}

export default MyanmarSchool;