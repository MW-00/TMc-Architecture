import React from "react";
import Project from "../Project";

import img1 from "../../images/project images/07 Net-Zero Estate/netzero project.jpg"
import img2 from "../../images/project images/07 Net-Zero Estate/netzero thumbnail2.jpg"
const NetZeroEstate = () => {
    return (
        <div>
            <Project title="NET-ZERO HOUSING"
                location="BARKING"
                image1={img1}
                image2={img2}
                description1={<>226 sustainable new homes over two mid-rise plots within the Gascoigne East
                masterplan.<br />
                A development of 226 sustainable new homes within the Gascoine East masterplan.
                55% of units will be at either affordable rent or London affordable rent. The proposal
                includes the first net zero carbon building to be delivered by LB Barking and
                Dagenham.<br />
                Accommodation is arranged around a central courtyard garden providing
                predominantly family accommodation. Deck access allows for 100% dual aspect
                units with a private central amenity space for residents. </>}

                description3="This project was completed whilst working at Pitman Tozer Architects."

            />
        </div>
    );

}

export default NetZeroEstate;