import React from "react";
import Project from "../Project";
import img1 from "../../images/project images/Community - Skate Space/Marcin CGI/Skatepatk - view 1 - 16 06 2023 B.jpg"
const SkateSpace = () => {
    return (
        <div>
            <Project title="SKATE SPACE"
                location="ST.OUEN, JERSEY"
                image1={img1}
                description1={<>
                This project&#39;s objective is to transform a disused Methodist Chapel into an indoor
                skatepark, in collaboration with the local charity Skate Space, which is dedicated to
                enhancing the lives of young people in the community through positive initiatives.<br />
                The design concept integrates skateboarding and artwork harmoniously with the
                chapel&#39;s existing architectural elements, offering skaters an inspiring environment for
                honing their skills. This initiative aims to provide a permanent, weather-resistant
                space for young people who have, for too long, had to resort to car parks during
                inclement weather. It not only offers them a home for their passion but also instills a
                sense of pride while safeguarding the historical significance of this valuable heritage
                building. <br />
                We have carefully addressed the requirements of this listed building application and
                successfully assembled a team of consultants who are generously contributing their
                services on a pro-bono or low-bono basis.
            </>
            }

                description2="Concept Design"
>

              
            </Project>
        </div>
    );

}

export default SkateSpace;