import React from "react";
import './certificate.css';
import FrontEnd from '../images/frontendcertificate.png';
import Mysql from '../images/mysqlcertificate.png';
import Depth from '../images/depthcertificate.png';
import MongoDB from '../images/mongodbcertificate.png';
import Java from '../images/corejavacertificate.png';
import JavaScript from '../images/javascriptcertificate.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function Certificate() {
    return (
        <>
            <div className="container-fluid justify-content-center design-bg" id="certificate">
                <h2 className="text-center mb-5 pt-5 design-head fw-bolder certificate-head">Certifications</h2>
                <div className="col-lg-9 mx-auto mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://coursera.org/share/f2c0e817b82402e4e6c3d42c92e41a39" target="_blank"><img src={FrontEnd} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">Front-End Developement</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://coursera.org/share/276dc6faf3fb21e5a3ce9110cc7e695f" target="_blank"><img src={Java} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">Core Java</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://coursera.org/share/4765f5a628e93f7e89540126a3ee0b46" target="_blank"><img src={Mysql} className="card-img-top p-2" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">MySQL</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 mx-auto mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://coursera.org/share/93ed274d2227b94c48f8750ed1d8650e" target="_blank"><img src={JavaScript} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">JavaScript</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://coursera.org/share/3d127ce9767b6ca9dbcbd46a2c313786" target="_blank"><img src={Depth} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">HTML and CSS Depth</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://coursera.org/share/d06815298852514c1647f0fccb3aa33e" target="_blank"><img src={MongoDB} className="card-img-top p-2" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">MongoDB</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-end py-4">
                        <p><FontAwesomeIcon icon={faCopyright} />2023 ALL RIGHTS RESERVED</p>
                    </div>
                </div>
                <div>
                    <ul className="icons-list d-none d-lg-block ps-3">
                        <li><Link to='https://www.linkedin.com/in/udhaya-abisheik/' target="_blank" className="text-dark"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                        <li className="my-2"><Link to='https://github.com/udhayaabisheik' target="_blank" className="text-dark"><FontAwesomeIcon icon={faGithub} /></Link></li>
                        <li><Link to='mailto:someone@yoursite.com' target="_blank" className="text-dark"><FontAwesomeIcon icon={faEnvelope} /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}