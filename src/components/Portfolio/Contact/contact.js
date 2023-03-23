import React from "react";
import './contact.css';
import Email from '../images/email.png';
import Phone from '../images/phone.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function Contact(){
    return(
        <>
        <div className="container-fluid contact-bg" id="contact">
            <div className="col-lg-8 col-md-8 mx-auto text-center">
                <h1 className="py-5 contact-head fw-bolder">Take A Coffee & Chat With Me</h1>
                <form className="w-md-75 w-sm-75 my-5 mx-auto">
                    <div className="col-lg-10 m-md-5 mx-auto justify-content-between my-4 row">
                        <div className="mb-3 col-lg-6 d-flex rounded-2 gmail-bg py-2">
                            <img src={Email} className="col-lg-2 col-2 mx-lg-2 mx-md-4 me-2" alt=""/>
                            <p className="col-lg-10 my-3 text-start">udhayaabisheik.n@gmail.com</p>
                        </div>
                        <div className="mb-3 col-lg-5 d-flex rounded-2 gmail-bg py-2">
                            <img src={Phone} className="col-lg-2 col-2 mx-lg-2 mx-md-4" alt=""/>
                            <p className="col-lg-10 my-3 text-start">+91 8270627707</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input type="text" className="form-control contact-text p-3" id="exampleFormControlInput1" placeholder="Your Name"/>
                    </div>
                    <div className="mb-4">
                        <input type="email" className="form-control contact-text p-3" id="exampleFormControlInput2" placeholder="Your Email"/>
                    </div>
                    <div className="mb-4">
                        <textarea className="form-control contact-textarea p-2" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary my-4">Send Message</button>
                </form>
            </div>
            <div>
                    <ul className="icons-list ps-3">
                        <li><Link to='https://www.linkedin.com/in/udhaya-abisheik/' target="_blank" className="text-dark"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                        <li className="my-2"><Link to='https://github.com/udhayaabisheik/' target="_blank" className="text-dark"><FontAwesomeIcon icon={faGithub} /></Link></li>
                        <Link to='mailto:someone@yoursite.com' target="_blank" className="text-dark"><li><FontAwesomeIcon icon={faEnvelope} /></li></Link>
                    </ul>
            </div>
        </div>
        </>
    );
}