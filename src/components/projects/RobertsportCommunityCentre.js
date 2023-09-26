import React from "react";
import Project from "../Project";

import img1 from "../../images/project images/04 Robertsport Community Centre/Images/Robertsport thumbnail.jpg"
const RobertsportCommunityCentre = () => {
    return (
        <div>
            <Project title="ROBERTSPORT COMMUNITY CENTRE"
                location="LIBERIA"
                image1={img1}
                description1={<>
                9X5 Architects have partnered with a locally based charity and with a local architect
                to deliver master planning and architectural design services for the Robertsport Surf
                Club.<br />
                Surf tourism is seen as a sustainable resource which could stimulate economic
                development in this less developed region of Liberia. Robertsport is a world class
                surf destination and it is hoped that by providing facilities and infrastructure to allow
                toursists and locals to visit, a tourism and surf industry can be born, providing jobs
                and opportunities for locals. <br />
                We will be visiting the site in late 2023 to undertake design workshops with locals,
                consultants, clients and stakeholders.
                </>}

                description2="RIBA Stages 0 - 7"
                description3="The project is in detailed design stage and is actively seeking donors."
            />
        </div>
    );

}

export default RobertsportCommunityCentre;