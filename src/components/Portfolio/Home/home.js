import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { Link as Linkscroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";


export function Home() {
    return (
        <>
            <div className="container justify-center text-center py-5 mb-5" id="home">
                <p className="normal-text mt-5 pt-5">LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className="py-4 head-text">Hi, I'm <span className="spname">Udhaya Abisheik</span></h1>
                <h1 className="py-2 head-text">A Certified MERN Full Stack Developer</h1>
                <p className="normal-text py-4">I'm focused on building responsive fullstack web applications while <br /> learning & exploring other technologies.</p>
                <div className="d-flex align-items-center justify-content-center mb-5">
                    <div className="rounded-circle shadow-lg icon-bg">
                        <Link to='https://www.linkedin.com/in/udhaya-abisheik/' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="brands-icon m-3" /></Link>
                    </div>
                    <div className="rounded-circle shadow-lg ms-3 icon-bg">
                        <Link to='https://github.com/udhayaabisheik' target="_blank"><FontAwesomeIcon icon={faGithub} className="brands-icon m-3" /></Link>
                    </div>
                    <div className="rounded-circle shadow-lg ms-3 icon-bg">
                        <Link to='mailto:n.u.abisheik2001@gmail.com'><FontAwesomeIcon icon={faEnvelope} className="brands-icon m-3" /></Link>
                    </div>
                    <div className="rounded-circle shadow-lg ms-3 icon-bg">
                        <Linkscroll to='contact'><FontAwesomeIcon icon={faAddressBook} className="brands-icon m-3" /></Linkscroll>
                    </div>
                </div>
            </div>
        </>
    );
}