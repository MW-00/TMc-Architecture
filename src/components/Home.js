import React from "react";
import hero from '../images/project images/Community - Skate Space/Marcin CGI/Skatepatk - view 1 - 16 06 2023 B.jpg'
import riba from '../images/logos/Riba-Logo.jpg'

const Home = () => {
    return (
        <div id="home">
            <section className="my-5 my-sm-5">
                <div id="hero" className="ratio ratio-16x9">
                    <img src={hero} alt="hero image" className="splash" />
                </div>
            </section>

            <section>
                <h2>Architecture that respects Context, Community & the Natural Environment </h2>
                <p>TMC Architects is a forward thinking architectural-practice based in Jersey. We specialise in the design & delivery of high quality sustainable architecture.</p>
            </section>

            <hr className="my-5" />

            <section>
                    <h2>TMc ARCHITECTURE</h2>
                    <p><strong>Tom McAviney</strong></p>
                    <p> Adress line 1 <br />
                        Adress line 2 <br /><br />
                        email: ... @ ... <br />
                        +00 000 000 000
                    </p>
            </section>
            <hr className="my-5" />

            <section className="mb-5">
                <div className="row text-center d-flex">
                    <div className="col-md-12 col-lg ">
                        <img src={riba} alt="riba" className="companies" />
                    </div>
                    <div className="col-md-12 col-lg ">
                        <img src={riba} alt="riba" className="companies" />
                    </div>
                    <div className="col-md-12 col-lg ">
                        <img src={riba} alt="riba" className="companies" />
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Home;