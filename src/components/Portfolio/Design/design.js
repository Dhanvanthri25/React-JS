import React from "react";
import './design.css';
import WebDesign from '../images/webdesign.jpeg';
import FrontEnd from '../images/frontend.png';
import BackEnd from '../images/backend.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export function Design(){
    return(
        <>
        <div className="container-fluid justify-content-center design-bg">
        <h2 className="text-center mb-5 pt-5 design-head fw-bolder"><span className="design-span">Design</span> & <span className="design-span">Devlopment</span> Skills Together <br/> Makes A Great <span className="design-span">Developer</span></h2>
            <div className="col-lg-7 mx-auto">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col-lg-4 col-md-6 col-8 mx-auto">
                    <div className="card card-pop h-100">
                        <img src={WebDesign} className="card-img-top p-3 rounded-5" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title design-head">Web Design</h5>
                                <p className="card-text card-content text-justify">I feel Web Designing is a key skills to become a great developer. A UI is the most important think in a web application, because it keeps user engaged and it feels good if you have good web design. Some of my web design work includes GIFT XPRESS, MY PORTFOLIO, TIKTIK etc. which are included on my projects section.</p>
                            </div>                            
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-8 mx-auto">
                    <div className="card card-pop h-100">
                        <img src={FrontEnd} className="card-img-top p-3 rounded-5" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title design-head">Frontend</h5>
                                <p className="card-text card-content text-justify">My frontend skills includes knowledge of HTML, CSS, JS, and REACT. I also have knowledge of NEXT JS, TAILWIND, and TYPESCRIPT. With the help of above technologies I have developed some web application which includes GIFT XPRESS, EXPENSE TRACKER, MY PORTFOLIO etc. this projects can be found on projects section,</p>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mx-md-auto col-8 mx-auto">
                    <div className="card card-pop h-100">
                        <img src={BackEnd} className="card-img-top p-3 rounded-5" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title design-head">Backend</h5>
                                <p className="card-text card-content text-justify">My backend skill include knowledge of NODE JS, EXPRESS JS, MONGODB and NEXT JS etc. I also know how to work with CMS(content management system) like SANITY. With the help this backend knowledge I have developed web applications like SUPER SHARE, TIKTIK, CHAT ME etc. which are included in my project section.</p>
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