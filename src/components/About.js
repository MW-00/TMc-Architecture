import React from "react";
import sketch from '../images/splash screen images/about.jpg'

const About = () => {
    return (
        <div>
            <div className="row mb-5">
                <div className="col">
                    <h2>ABOUT</h2>
                    
                </div>
                <div className="col-8">
                    <p>
                        <strong>9X5 ARCHITECTS is a forward thinking architectural-practice based in Jersey with a focus on designing buildings that make a positive impact to their surroundings.</strong><br/>   
                        The practice specialises in the design & delivery of high quality sustainable architecture.
                        We undertake commissions across a range of sectors from domestic extensions and alterations, work to listed buildings, small-scale housing developments and community projects.
                        We unlock the value of each site to design innovative buildings that prioritise people, places and the planet.
                    </p>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <h2>SERVICES</h2>
                </div>
                <div className="col-8">
                    <p>
                        We offer a complete bespoke design service for our clients - from home-improvers, community groups, commercial developers and charities.
                        We can deliver a full range of architectural services across all stages from feasibility studies to planning applications, Building Byelaws Applications and full working drawing packages, along with tender return analysis & contract administration.
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col">
                    <h2>EXPERIENCE</h2>
                </div>
                <div className="col-8">
                    <p>
                        Prior to setting up the practice in 2023, Tom was a senior architect for 3 years at a large architectural studio in Jersey. Prior to this he gained experience at RIBA-award winning practices in London including Pitman Tozer Architects, JDA & Levitt Bernstein.<br />
                        While there, he worked on on a number of large-scale residential developments such as the <strong>Net-Zero Estate</strong> in Barking, as well as private residential projects such as <strong>Stepped House</strong> in Barnes. He has gained extensive experience at all stages on projects ranging in value from £500k to £10m. <br />
                        Tom graduated from the Welsh School of Architecture (Cardiff University) and The Bartlett School of Architecture (UCL).
                    </p>
                </div>
            </div>

            <section className="my-5">
                <div className="row text-center d-flex">
                    <div className="col-md-12 col-lg">
                        <div className="imgContainer  border" >
                            <img src={sketch} alt="riba" className="thumbnail" />
                        </div>
                    </div>
                    {/* <div className="col-md-12 col-lg">
                        <div className="imgContainer ratio ratio-16x9 border" >
                            <img src={sketch} alt="riba" className="thumbnail" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg">
                        <div className="imgContainer ratio ratio-16x9 border" >
                            <img src={sketch} alt="riba" className="thumbnail" />
                        </div>
                    </div> */}

                </div>
            </section>
        </div >

    );
}

export default About;

