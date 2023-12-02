import React from "react";
import './about.css';
import Blazer from '../images/img.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function About() {
    return (
        <>
            <div className="container row mx-auto p-5 pt-5" id="about">
                <div className="col-lg-8">
                    <h4 className="about-span">ABOUT</h4>
                    <h1 className="my-4 about-head fw-bolder">Who I Am</h1>
                    <h6 className="my-4 about-span">Hi I'am Dhanvanthri Ranganathan</h6>
                    <p className="text-justify">A full stack developer with a love for creating cutting-edge, dynamic web apps. I have created a variety of online apps over the course of my many years in the field, from straightforward single-page programmes to intricate e-commerce platforms.I have experience with both front-end and back-end programming as a MERN full stack web engineer. I am an expert at using Node.js to create server-side apps and have a solid grasp of HTML, CSS, and JavaScript. Additionally, I've worked with APIs and systems like MongoDB and MySQL.</p>
                    <ul>
                        <li className="text-justify list-arrow">One of the things that distinguish me from other candidates is that I am able to remain calm and focused no matter how difficult the task. I always try to stay positive and find a way out. I am sure that everything happens for a reason and that any mistake can be fixed.</li>
                        <li className="text-justify list-arrow">I am a quick learner and constantly improve my skills not only in professional but also in multiple other fields. If hired for the position, I will continue to learn and transfer obtained knowledge and skills to other team members.</li>
                        <li className="text-justify list-arrow">You will never find a more disciplined person. I am never late and know how to value the time of other people. Especially in the engineering field, where everything should be clear, structured, and meet requirements.</li>
                    </ul>
                    <Link to="/helloworld"><button type="button" class="btn btn-primary rounded-0 mb-3">Check Out My Projects <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
                <div className="col-lg-4 pad col-md-8">
                    <div className="p-4  shadow-lg rounded-4 img-pop">
                        <img src={Blazer} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="text-end py-4">
                    <p><FontAwesomeIcon icon={faCopyright} />2023 ALL RIGHTS RESERVED</p>
                </div>
            </div>
            <div>
                <ul className="icons-list d-none d-lg-block">
                    <li><Link to='https://www.linkedin.com/in/dhanvanthri-ranganathan-56a073235/' target="_blank" className="text-dark"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                    <li className="my-2"><Link to='https://github.com/Dhanvanthri25' target="_blank" className="text-dark"><FontAwesomeIcon icon={faGithub} /></Link></li>
                    <li><Link to='https://accounts.google.com/v3/signin/identifier?dsh=S822965044%3A1679908683655331&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession' target="_blank" className="text-dark"><FontAwesomeIcon icon={faEnvelope} /></Link></li>
                </ul>
            </div>
        </>
    );
}