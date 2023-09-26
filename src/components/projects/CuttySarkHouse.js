import React from "react";
import Project from "../Project";

import img1 from "../../images/project images/00 Cutty Sark House/Cutty Sark - exterior - 14 09 2023 comporess.jpg"
import img2 from "../../images/project images/00 Cutty Sark House/Cutty Sark -interior compressed.jpg"
const CuttySarkHouse = () => {
    return (
        <div>
            <Project title="CUTTY SARK"
                location="PASSIVHAUS RETROFIT"
                image1={img1}
                image2={img2}
                description1={
                <>
                Feasibility study looking at the potential to extensively refurbish a residential property
                situated within the Coastal National Park, with a focus on achieving Passivhaus
                standards.
                <br />
                We explored how the principles of Passivhaus could be successfully applied to the
                existing building.
                A key objective was to enhance the connection between the building and its natural
                surroundings by carefully selecting materials and reconfiguring internal spaces and
                their views.
                </>}

                description2="Concept Design"
            />
        </div>
    );

}

export default CuttySarkHouse;