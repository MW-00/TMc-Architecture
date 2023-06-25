import React from "react";

const Contact = () => {
    return (
        <div>

            <div className="row">
                <div className="col-12 col-lg-8 p-0 order-2" style={{ minHeight: "100px" }}>
                    <iframe id="map" className=""
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.5110149741236!2d-2.2486917237798387!3d49.180647415492274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480db1d6499d7c59%3A0xccdd662279ef1010!2sLa%20Corbi%C3%A8re!5e0!3m2!1sen!2spl!4v1686430873573!5m2!1sen!2spl"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>


                </div>
                <div className="col-12 col-lg-4 order-sm-1 order-lg-3 text-center align-items-center d-flex justify-content-center flex-column" style={{ minHeight: "100px" }}>
                    <p className="nav-link">CONTACT </p>
                    <h2>TM<sup>c</sup> ARCHITECTURE</h2>
                    <p><strong>Tom McAviney</strong></p>
                    <p> Adress line 1 <br />
                        Adress line 2 <br /><br />
                        email: ... @ ... <br />
                        +00 000 000 000
                    </p>
                </div>

            </div>



        </div>


    );
}

export default Contact;