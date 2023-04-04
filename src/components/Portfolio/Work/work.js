import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nike from '../images/Nike.png';
import FeedBack from '../images/Feedback.png';
import TechCard from '../images/Technologycard.png';
import React from "react";
import { Link } from "react-router-dom";

export function Work() {
    return (
        <>
            <div className="container-fluid justify-content-center design-bg" id="work">
                <h2 className="text-center mb-5 pt-5 design-head fw-bolder">My Creative <span className="design-span"> Portfolio </span> Section</h2>
                <div className="col-lg-8 mx-auto">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-lg-4 col-md-6 col-8 mx-auto">
                            <div className="card">
                                <img src={Nike} className="card-img-top p-3 rounded-5" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title design-head">Nike Products</h5>
                                    <p className="card-text card-content text-justify">A Nike product card page which conatins different types of nike products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-8 mx-auto">
                            <div className="card">
                                <img src={FeedBack} className="card-img-top p-3 rounded-5" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title design-head">Feedback Form</h5>
                                    <p className="card-text card-content text-justify">A feedback from which receives the feeback and send a thank you response with smile to send feedback to admin</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mx-md-auto col-8 mx-auto">
                            <div className="card">
                                <img src={TechCard} className="card-img-top p-3 rounded-5" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title design-head">Tech Cards</h5>
                                    <p className="card-text card-content text-justify">A technology card which conatins current trend types of IT employee works</p>
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