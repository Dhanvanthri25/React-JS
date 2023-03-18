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
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export function Skills(){
    return(
        <>
        <div className="container-fluid" id="skills">
            <h1 className="text-center my-5 pt-5 fw-bolder skills-head">Skills & Education</h1>
            <div className="col-lg-8 col-md-9 col-10 my-4 pt-5 mx-auto row">
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
                            <div className="skills-icon rounded-circle"><img src={Nodejs} className="img-fluid p-3" alt=""/></div>
                            <p className="mt-2">NodeJS</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-3">
                            <div className="skills-icon rounded-circle"><img src={Mysql} className="img-fluid p-3" alt=""/></div>
                            <p className="mt-2">MySQL</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-3">
                        <   div className="skills-icon rounded-circle"><img src={Mongodb} className="img-fluid p-3" alt=""/></div>
                            <p className="mt-2">MongoDB</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-3">
                            <div className="skills-icon rounded-circle"><img src={Java} className="img-fluid p-3" alt=""/></div>
                            <p className="mt-2">Core Java</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="col-lg-12 my-4 row">
                        <div className="col-lg-4 text-lg-center">
                            <h5 className="skills-span">2023</h5>
                        </div>
                        <div className="col-lg-8">
                            <h5 className="skills-head">Master of Computer Application</h5>
                            <p>Hindustan College of Arts and Science</p>
                        </div>
                    </div>
                    <div className="col-lg-12 my-4 row">
                        <div className="col-lg-4 text-lg-center">
                            <h5 className="skills-span">2021</h5>
                        </div>
                        <div className="col-lg-8">
                            <h5 className="skills-head">Bsc(Computer Science)</h5>
                            <p>Karpagm Academy of Higher Education</p>
                        </div>
                    </div>
                    <div className="col-lg-12 my-4 row">
                        <div className="col-lg-4 text-lg-center">
                            <h5 className="skills-span">2018</h5>
                        </div>
                        <div className="col-lg-8">
                            <h5 className="skills-head">HSC</h5>
                            <p>Kings Matric Higher Secondary Schoool</p>
                        </div>
                    </div>
                    <div className="col-lg-12 my-4 row">
                        <div className="col-lg-4 text-lg-center">
                            <h5 className="skills-span">2016</h5>
                        </div>
                        <div className="col-lg-8">
                            <h5 className="skills-head">SSLC</h5>
                            <p>Kings Matric Higher Secondary Schoool</p>
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