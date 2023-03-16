import React from "react";
import './about.css';
import Blazer from '../images/Blazer.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export function About(){
    return(
        <>
        <div className="container row mx-auto p-5" id="about">
            <div className="col-lg-8">
                <h4 className="about-span">ABOUT</h4>
                <h1 className="my-4 about-head fw-bolder">Who I Am</h1>
                <h6 className="my-4 about-span">Hi I'am Udhaya Abisheik</h6>
                <p className="text-justify">A detail oriented and multitasking professional with exceptional coding techniques having a Masters degree in Computer Application. Comprehensive knowledge of Full Stack Development languages for instance HTML, CSS, React JS, Node JS, Core JAVA, MySQL and special talent of writing highly competent programs.</p>
                <p className="text-justify">These are some qualities that I think sets me apart from other candidates</p>
                <ul>
                    <li className="text-justify list-arrow">One of the things that distinguish me from other candidates is that I am able to remain calm and focused no matter how difficult the task. I always try to stay positive and find a way out. I am sure that everything happens for a reason and that any mistake can be fixed.</li>
                    <li  className="text-justify list-arrow">I am a quick learner and constantly improve my skills not only in professional but also in multiple other fields. If hired for the position, I will continue to learn and transfer obtained knowledge and skills to other team members.</li>
                    <li className="text-justify list-arrow">You will never find a more disciplined person. I am never late and know how to value the time of other people. Especially in the engineering field, where everything should be clear, structured, and meet requirements.</li>
                </ul>
                <button type="button" class="btn btn-primary rounded-0 mb-3">Check Out My Project <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
            <div className="col-lg-4">
                <div className="p-4 shadow-lg rounded-4 img-pop">
                    <img src={Blazer} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
        <div>
            <ul className="icons-list">
                <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
                <li className="my-2"><FontAwesomeIcon icon={faGithub}/></li>
                <li><FontAwesomeIcon icon={faEnvelope}/></li>
            </ul>
        </div>
        </>
    );
}