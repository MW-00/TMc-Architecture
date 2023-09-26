import React from "react";
import Project from "../Project";

import img1 from "../../images/project images/06 Stepped House/3.jpg"
import img2 from "../../images/project images/06 Stepped House/01.jpg"
import img3 from "../../images/project images/06 Stepped House/2.jpg"
const SteppedHouse = () => {
    return (
        <div>
            <Project title="STEPPED HOUSE"
                location=""
                image1={img1}
                image2={img2}
                image3={img3}
                description1={<>
                Stepped House is a private residential dwelling built in SW London on a tight
                backland plot. Responding to the strict planning criteria, the house is formed over
                four levels and designed around three walled courtyards. At the centre of the house
                is a pavilion room that ties separate accommodation together and creates the
                transition as the building steps down the site. <br />
                The façade design creates an identity in contrast to the local vernacular using robust
                materials such as exposed concrete, water struck brick, standing seam zinc and
                heavy oak framing. A contrasting lightweight greyed timber cladding was adopted
                above. </> }

                description3="This project was completed whilst working at Jonathan Douglas Architects."

            />
        </div>
    );

}

export default SteppedHouse;