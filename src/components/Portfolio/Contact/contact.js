import React from "react";
import './contact.css';
import Email from '../images/email.png';
import Phone from '../images/phone.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export function Contact(){
    return(
        <>
        <div className="container-fluid contact-bg">
            <div className="col-lg-12 text-center">
                <h2 className="pt-5">Take A Coffee & Chat With Me</h2>
                <form className="w-75 my-5 mx-auto">
                    <div className="col-lg-10 m-md-5 mx-auto justify-content-between my-4 row">
                        <div className="mb-3 col-lg-6 d-flex rounded-2 gmail-bg py-2">
                            <img src={Email} className="col-lg-2 col-2 mx-lg-2 mx-md-4 me-2" alt=""/>
                            <p className="col-lg-10 my-3 text-start">udhayaabisheik.n@gmail.com</p>
                        </div>
                        <div className="mb-3 col-lg-5 d-flex rounded-2 gmail-bg py-2">
                            <img src={Phone} className="col-lg-2 col-2 mx-lg-4 mx-md-4" alt=""/>
                            <p className="col-lg-10 my-3 text-start">+91 8270627707</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Your Email"/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary my-4">Send Message</button>
                </form>
            </div>
            <div>
                <ul className="icons-list">
                    <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
                    <li className="my-2"><FontAwesomeIcon icon={faGithub}/></li>
                    <li><FontAwesomeIcon icon={faEnvelope}/></li>
                </ul>
            </div>
        </div>
        </>
    );
}