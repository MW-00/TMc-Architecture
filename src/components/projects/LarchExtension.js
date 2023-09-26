import React from "react";
import Project from "../Project";

import img1 from "../../images/project images/01 Cedar Extension/Cedar Extension project.jpg"
const LarchExtension = () => {
    return (
        <div>
            <Project title="LARCH EXTENSION"
                location="ST. BRELADE"
                image1={img1}
                description1="Extension and refurbishment project to provide an enlarged kitchen, dining space
                and utility room. The design was constructed using SIPs panels and features a
                vaulted ceiling with enlarged views outside and an improved connection to the
                garden."

                description2="RIBA Stages 0 - 3"
                description3="The project is under construction"
            />
        </div>
    );

}

export default LarchExtension;