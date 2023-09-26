import React from "react";
import Project from "../Project";

import img1 from "../../images/project images/03 Zinc Extension/Zinc Extension thumbnail.jpg"
const ZincExtension = () => {
    return (
        <div>
            <Project title="ZINC EXTENSION"
                location="ST.BRELADE"
                image1={img1}
                description1={<>
                Refurbishment and upgrade to the existing property including a single storey rear
                extension to provide enlarged kitchen, dining and living space.
                <br />
                The design features a raked ceiling with enlarged views outside and an improved
                connection to the garden.
                </>}

                description2="RIBA Stages 0 - 4"
                description3="The project was completed in 2023"
            />
        </div>
    );

}

export default ZincExtension;