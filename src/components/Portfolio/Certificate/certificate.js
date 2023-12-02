import React from "react";
import './certificate.css';
import FrontEnd from '../images/INTRO FRONT END CERTIFICATE.jpg';
import Mysql from '../images/CSS CERTIFICATION.jpg';
import Depth from '../images/HTML & CSS DEPTH CERTIFICATION.jpg';
import MongoDB from '../images/CERTIFICATE OF CRUD IN MONGOdb.jpg';
import Java from '../images/LEARNQUEST CORE JAVA_page-0001.jpg';
import JavaScript from '../images/CERTIFICATE OF AWS Cloud Technical Essentials.jpg';
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
                                <Link to="https://www.coursera.org/account/accomplishments/verify/SMVCEAXTJFSH" target="_blank"><img src={FrontEnd} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">Front-End Developement</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://www.coursera.org/account/accomplishments/specialization/GCYKHQJY3WF2" target="_blank"><img src={Java} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">Core Java</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://www.coursera.org/account/accomplishments/verify/DF67RSUUFCS2" target="_blank"><img src={Mysql} className="card-img-top p-2" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">CSS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 mx-auto mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://www.coursera.org/account/accomplishments/verify/TNSMLQXDHQF4" target="_blank"><img src={JavaScript} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">AWS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://www.coursera.org/account/accomplishments/verify/85HNFQ37JXTT" target="_blank"><img src={Depth} className="card-img-top p-2" alt="" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title design-head">HTML and CSS Depth</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-pop">
                                <Link to="https://www.coursera.org/account/accomplishments/verify/BVPZAKL7QWQE" target="_blank"><img src={MongoDB} className="card-img-top p-2" alt="..." /></Link>
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
                        <li><Link to='https://www.linkedin.com/in/dhanvanthri-ranganathan-56a073235/' target="_blank" className="text-dark"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                        <li className="my-2"><Link to='https://github.com/Dhanvanthri25' target="_blank" className="text-dark"><FontAwesomeIcon icon={faGithub} /></Link></li>
                        <li><Link to='https://accounts.google.com/v3/signin/identifier?dsh=S822965044%3A1679908683655331&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession' target="_blank" className="text-dark"><FontAwesomeIcon icon={faEnvelope} /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}