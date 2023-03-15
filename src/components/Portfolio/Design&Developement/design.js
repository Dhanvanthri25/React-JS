import React from "react";
import WebDesign from '../images/webdesign.jpeg';
import FrontEnd from '../images/frontend.png';
import BackEnd from '../images/backend.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export function Design(){
    return(
        <>
        <div className="container justify-content-center">
        <h2 className="text-center">Design & Devlopment Skills Together <br/> Makes A Great Developer</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={WebDesign} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Web Design</h5>
                                <p className="card-text">I feel Web Designing is a key skills to become a great developer. A UI is the most important think in a web application, because it keeps user engaged and it feels good if you have good web design. Some of my web design work includes GIFT XPRESS, MY PORTFOLIO, TIKTIK etc. which are included on my projects section.</p>
                            </div>                            
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={FrontEnd} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Frontend</h5>
                                <p className="card-text">My frontend skills includes knowledge of HTML, CSS, JS, and REACT. I also have knowledge of NEXT JS, TAILWIND, and TYPESCRIPT. With the help of above technologies I have developed some web application which includes GIFT XPRESS, EXPENSE TRACKER, MY PORTFOLIO etc. this projects can be found on projects section,</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={BackEnd} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Backend</h5>
                                <p className="card-text">My backend skill include knowledge of NODE JS, EXPRESS JS, MONGODB and NEXT JS etc. I also know how to work with CMS(content management system) like SANITY. With the help this backend knowledge I have developed web applications like SUPER SHARE, TIKTIK, CHAT ME etc. which are included in my project section.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ul className="icons-list">
                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                <li className="my-2"><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faEnvelope} /></li>
            </ul>
        </div>
        </>
    );
}