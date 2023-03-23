import React from "react";
import './design.css';
import FrontEnd from '../images/frontendcertificate.png';
import Mysql from '../images/mysqlcertificate.png';
import Depth from '../images/htmlandcssdepth.png';
import MongoDB from '../images/mongodbcertificate.png';
import Java from '../images/corejavacertificate.png';
import JavaScript from '../images/javascriptcertificate.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function Design(){
    return(
        <>
        <div className="container-fluid justify-content-center design-bg">
        <h2 className="text-center mb-5 pt-5 design-head fw-bolder"><span className="design-span">Design</span> & <span className="design-span">Devlopment</span> Skills Together <br/> Makes A Great <span className="design-span">Developer</span></h2>
            <div className="col-lg-9 mx-auto mb-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col-lg-4">
                    <div className="card card-pop">
                        <img src={FrontEnd} className="card-img-top p-2" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title design-head">Front-End Developement</h5>
                            </div>                            
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-pop">
                        <img src={Java} className="card-img-top p-2" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title design-head">Core Java</h5>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-pop">
                        <img src={Mysql} className="card-img-top p-2" alt="..."/>
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
                        <img src={JavaScript} className="card-img-top p-2" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title design-head">JavaScript</h5>
                            </div>                            
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-pop">
                        <img src={Depth} className="card-img-top p-2" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title design-head">HTML and CSS Depth</h5>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-pop">
                        <img src={MongoDB} className="card-img-top p-2" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title design-head">MongoDB</h5>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                    <ul className="icons-list ps-3">
                        <Link to='https://www.linkedin.com/in/udhaya-abisheik/' target="_blank" className="text-dark"><li><FontAwesomeIcon icon={faLinkedinIn} /></li></Link>
                        <Link to='https://github.com/udhayaabisheik' target="_blank" className="text-dark"><li className="my-2"><FontAwesomeIcon icon={faGithub} /></li></Link>
                        <Link to='mailto:someone@yoursite.com' target="_blank" className="text-dark"><li><FontAwesomeIcon icon={faEnvelope} /></li></Link>
                    </ul>
            </div>
        </div>
        </>
    );
}