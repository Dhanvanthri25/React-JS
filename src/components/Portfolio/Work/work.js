import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nike from '../images/Nike.png';
import FeedBack from '../images/Feedback.png';
import TechCard from '../images/Technologycard.png';
import React from "react";
import './work.css';

export function Work(){
    return(
        <>
            <div className="container-fluid justify-content-center design-bg" id="work">
                <h2 className="text-center mb-5 pt-5 design-head fw-bolder">My Creative <span className="design-span"> Portfolio </span> Section</h2>
                <div className="col-lg-8 text-center mx-auto my-5">
                    <button type="button" class="btn btn-light">UI/UX</button>
                    <button type="button" class="btn btn-light mx-4">Bootstrap</button>
                    <button type="button" class="btn btn-light">Node Js</button>
                    <button type="button" class="btn btn-light mx-4">React JS</button>
                    <button type="button" class="btn btn-primary">All</button>
                </div>
                <div className="col-lg-8 mx-auto">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-lg-4 col-md-6 col-8 mx-auto">
                            <div className="card">
                                <img src={Nike} className="card-img-top p-3 rounded-5" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title design-head">Web Design</h5>
                                    <p className="card-text card-content text-justify">A Nike product card page which conatins different types of nike products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-8 mx-auto">
                            <div className="card">
                                <img src={FeedBack} className="card-img-top p-3 rounded-5" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title design-head">Frontend</h5>
                                    <p className="card-text card-content text-justify">A feedback from which receives the feeback and send a thank you response with smile to send feedback to admin</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mx-md-auto col-8 mx-auto">
                            <div className="card">
                                <img src={TechCard} className="card-img-top p-3 rounded-5" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title design-head">Backend</h5>
                                    <p className="card-text card-content text-justify">A technology card which conatins current trend types of IT employee works</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="icons-list ps-3">
                        <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                        <li className="my-2"><FontAwesomeIcon icon={faGithub} /></li>
                        <li><FontAwesomeIcon icon={faEnvelope} /></li>
                    </ul>
                </div>
            </div>
        </>
    );
}