import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { Link as Linkscroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";


export function Home() {
    return (
        <>
            <div className="container justify-center text-center py-5 mb-5" id="home">
                <p className="normal-text mt-5 pt-5">LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className="py-4 head-text">Hi, I'm <span className="spname">Dhanvanthri R</span></h1>
                <h1 className="py-2 head-text">A Certified MERN Full Stack Developer</h1>
                <p className="normal-text py-4">I'm focused on building responsive fullstack web applications while <br /> learning & exploring other technologies.</p>
                <div className="d-flex align-items-center justify-content-center mb-5">
                    <div className="rounded-circle shadow-lg icon-bg">
                        <Link to='https://www.linkedin.com/in/dhanvanthri-ranganathan-56a073235/' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="brands-icon m-3" /></Link>
                    </div>
                    <div className="rounded-circle shadow-lg ms-3 icon-bg">
                        <Link to='https://github.com/Dhanvanthri25' target="_blank"><FontAwesomeIcon icon={faGithub} className="brands-icon m-3" /></Link>
                    </div>
                    <div className="rounded-circle shadow-lg ms-3 icon-bg">
                        <Link to='https://accounts.google.com/v3/signin/identifier?dsh=S822965044%3A1679908683655331&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession'><FontAwesomeIcon icon={faEnvelope} className="brands-icon m-3" /></Link>
                    </div>
                    <div className="rounded-circle shadow-lg ms-3 icon-bg">
                        <Link to='https://www.instagram.com/__.dharnesh.__/'><FontAwesomeIcon icon={faInstagram} className="brands-icon m-3" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}