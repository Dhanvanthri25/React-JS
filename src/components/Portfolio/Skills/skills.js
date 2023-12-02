import React from "react";
import './skills.css';
import Html from '../images/html.png';
import Css from '../images/css.png';
import Javascript from '../images/javascript.png';
import Reactjs from '../images/react.png';
import Nodejs from '../images/node.png';
import Mysql from '../images/mysql.png';
import Mongodb from '../images/mongo.png';
import Java from '../images/java.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function Skills() {
    return (
        <>
            <div className="container-fluid" id="skills">
                <h1 className="text-center my-lg-5 mt-5 pt-lg-5 my-0 pt-0 fw-bolder skills-head">Skills & Education</h1>
                <div className="col-lg-8 col-md-9 col-10 my-4 pt-lg-5 mx-auto row">
                    <div className="col-lg-6">
                        <div className="col-lg-12 my-4 row text-center">
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="skills-icon rounded-circle"><img src={Html} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">HTML</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="skills-icon rounded-circle"><img src={Css} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">CSS</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="skills-icon rounded-circle"><img src={Javascript} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">JavaScript</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="skills-icon rounded-circle"><img src={Reactjs} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">ReactJS</p>
                            </div>
                        </div>
                        <div className="col-lg-12 my-4 row text-center">
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="skills-icon rounded-circle"><img src={Nodejs} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">NodeJS</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="skills-icon rounded-circle"><img src={Mysql} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">MySQL</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-3">
                                <   div className="skills-icon rounded-circle"><img src={Mongodb} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">MongoDB</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-3">
                                <div className="skills-icon rounded-circle"><img src={Java} className="img-fluid p-3" alt="" /></div>
                                <p className="mt-2">Spring Boot</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-lg-12 my-4 row">
                            <div className="col-lg-4 text-lg-center">
                                <h5 className="skills-span">2023</h5>
                            </div>
                            <div className="col-lg-8">
                                <h5 className="skills-head">Master of Computer Application in Distance</h5>
                                <p>Bharathiar University,Coimbatore</p>
                            </div>
                        </div>
                        <div className="col-lg-12 my-4 row">
                            <div className="col-lg-4 text-lg-center">
                                <h5 className="skills-span">2022</h5>
                            </div>
                            <div className="col-lg-8">
                                <h5 className="skills-head">B.Sc(Electronics & Communications Systems)</h5>
                                <p>K G College Of Arts And Science,Coimbatore</p>
                            </div>
                        </div>
                        <div className="col-lg-12 my-4 row">
                            <div className="col-lg-4 text-lg-center">
                                <h5 className="skills-span">2019</h5>
                            </div>
                            <div className="col-lg-8">
                                <h5 className="skills-head">HSC</h5>
                                <p>Kamarajar Matric Hr Sec School,Coimbatore</p>
                            </div>
                        </div>
                        <div className="col-lg-12 my-4 row">
                            <div className="col-lg-4 text-lg-center">
                                <h5 className="skills-span">2017</h5>
                            </div>
                            <div className="col-lg-8">
                                <h5 className="skills-head">SSLC</h5>
                                <p>Kamarajar Matric Hr Sec School,Coimbatore</p>
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