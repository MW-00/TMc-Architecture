import React from "react";

const Contact = () => {
    return (
        <div>





            <div className="row m-0 p-0">
                <div className="col-12 col-lg-6 p-0 order-2" style={{ minHeight: "100px" }}>
                    <iframe id="map" className="googleMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.8966823834403!2d-2.2007466405048324!3d49.19074016825528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480dad4370ae00d9%3A0xe50bfe359fa42b25!2sDigital%20Jersey%20Xchange!5e0!3m2!1spl!2spl!4v1690545316456!5m2!1spl!2spl"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>


                </div>
                <div className="col-12 col-lg-6 order-sm-1 order-lg-3 align-items-start d-flex justify-content-start flex-column" style={{ minHeight: "100px" }}>
                    <p className="nav-link">CONTACT</p>
                    <p>
                        For new enquiries please get in touch via email or telephone.<br />
                        <strong>a:</strong> Digital Jersey Xchange | South Exchange <span className="d-md-inline d-none">|</span> <span className="d-md-none"><br/>&nbsp;&nbsp;&nbsp; </span> Route Orange | Jersey | JE3&nbsp;8JG<br />
                        <strong>e:</strong> tom@9x5architects.com<br />
                        <strong>t:</strong> +44 7797 930 814
                    </p>
                </div>

            </div>



        </div >


    );
}

export default Contact;