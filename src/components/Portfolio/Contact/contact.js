import React, { useState } from "react";
import './contact.css';
import Email from '../images/email.png';
import Phone from '../images/phone.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

export function Contact() {

    const [showForm, setShowForm] = useState(true);

    const handelsubmit = async (event) => {
        event.preventDefault();

        // var value = { headers: { 'Content-Type': 'application/json' } };
        var value = { headers: {"Access-Control-Allow-Origin": "*"} };

        var userName = document.getElementById("username").value;
        var userEmail = document.getElementById("useremail").value;
        var userMsg = document.getElementById("usermsg").value;

        if (userName === '' || userName === null) {
            alert("Enter your Your Name");
            window.location.reload();
        }
        else if (userEmail === '' || userEmail === null) {
            alert(" Enter your Email Name");
            window.location.reload();
        }
        else if (userMsg === '' || userMsg === null) {
            alert("Enter your message");
            window.location.reload();
        } else {
            await axios.post("http://192.168.1.7:8080/signup/send/email", { "personName": userName, "personEmail": userEmail, "personMessage": userMsg })
                .then(function (res) {
                    if (res.data.responseMsg === 'error') {
                        window.location.reload();
                    }
                })
                .catch(function (err) {
                    alert(err);
                    window.location.reload();
                })
        }
        setShowForm(false);
    }

    return (
        <>
            <div className="container-fluid contact-bg" id="contact">
                <div className="col-lg-8 col-md-8 mx-auto text-center">
                    <h1 className="py-5 contact-head fw-bolder">Take A Coffee & Chat With Me</h1>
                    <div className="col-lg-10 m-md-5 mx-auto justify-content-between my-4 row">
                        <div className="mb-3 col-lg-6 d-flex rounded-2 gmail-bg py-2">
                            <img src={Email} className="col-lg-2 col-2 mx-lg-2 mx-md-4 me-2" alt="" />
                            <p className="col-lg-10 my-3 text-start">udhayaabisheik.n@gmail.com</p>
                        </div>
                        <div className="mb-3 col-lg-5 d-flex rounded-2 gmail-bg py-2">
                            <img src={Phone} className="col-lg-2 col-2 mx-lg-2 mx-md-4" alt="" />
                            <p className="col-lg-10 my-3 text-start">+91 8270627707</p>
                        </div>
                    </div>
                    {showForm ? (
                        <form className="w-md-75 w-sm-75 my-5 mx-auto">
                            <div className="mb-4">
                                <input type="text" className="form-control contact-text p-3" id="username" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control contact-text p-3" id="useremail" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control contact-textarea p-2" id="usermsg" placeholder="Your Message" rows="3"></textarea>
                            </div>
                            <button type="submit" onClick={handelsubmit} className="btn btn-primary my-4">Send Email</button>
                        </form>
                    ) : (
                        <h1 className="contact-head fw-bolder">Thank You For Getting In Touch!</h1>
                    )}
                </div>
                <div className="text-end py-4">
                    <p><FontAwesomeIcon icon={faCopyright} />2023 ALL RIGHTS RESERVED</p>
                </div>
                <div>
                    <ul className="icons-list d-none d-lg-block ps-3">
                        <li><Link to='https://www.linkedin.com/in/udhaya-abisheik/' target="_blank" className="text-dark"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                        <li className="my-2"><Link to='https://github.com/udhayaabisheik/' target="_blank" className="text-dark"><FontAwesomeIcon icon={faGithub} /></Link></li>
                        <li><Link to='mailto:someone@yoursite.com' target="_blank" className="text-dark"><FontAwesomeIcon icon={faEnvelope} /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}