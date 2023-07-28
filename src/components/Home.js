import React from "react";
import hero from '../images/project images/00 Cutty Sark House/Cutty Sark - exterior - 14 09 2023 comporess.jpg'
import hero2 from '../images/project images/02 Skate Space/Marcin CGI/Skatepatk - view 1 - 16 06 2023 B.jpg'
import riba from '../images/logos/riba.jpg'
import eco from '../images/logos/eco.jpg'
import arb from '../images/logos/arb.jpg'

const Home = () => {
    return (
        <div id="home">
            <section className="my-5 my-sm-5">


                <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hero} className="d-block w-100 splash" alt="hero image" />
                        </div>
                        <div className="carousel-item">
                            <img src={hero2} className="d-block w-100 splash" alt="hero image" />
                        </div>
                    </div>
                </div>



                {/* <div id="hero" className="ratio ratio-16x9">
                    <img src={hero} alt="hero image" className="splash" />
                </div> */}

            </section>

            <section>
                <h2>Architecture that respects Context, Community & the Natural Environment </h2>
                <p>9X5 ARCHITECTS is a forward thinking architectural-practice based in Jersey. We specialise in the design & delivery of high quality sustainable architecture.</p>
            </section>

            <hr className="my-5" />

            {/* <section>
                    <h2>9X5 ARCHITECTS</h2>
                    <p><strong>Tom McAviney</strong></p>
                    <p> Adress line 1 <br />
                        Adress line 2 <br /><br />
                        email: ... @ ... <br />
                        +00 000 000 000
                    </p>
            </section>
            <hr className="my-5" /> */}

            <section className="mb-5">
                <div className="row">
                    <div className="col d-flex flex-column flex-md-row align-items-center justify-content-between m-0 p-0 gap-3">
                        <div><img src={riba} alt="riba" className="companies" /></div>
                        <div><img src={arb} alt="riba" className="companies" /></div>
                        <div><img src={eco} alt="riba" className="companies" /></div>
                    </div>


                    {/* <div className="col-md-12 col-lg border">
                    <img src={arb} alt="riba" className="companies" />
                    </div>
                    <div className="col-md-12 col-lg border">
                        <img src={riba} alt="riba" className="companies" />
                    </div>
                    <div className="col-md-12 col-lg border">
                        <img src={eco} alt="riba" className="companies" />
                    </div> */}
                </div>
            </section>

        </div>
    );
}
// RIBA, ARB and Eco Active 
export default Home;