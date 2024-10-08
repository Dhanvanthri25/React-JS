import React from "react";
import { Link } from "react-router-dom";
import { Link as Linkscroll } from "react-scroll";
import './menubar.css';
import Code from '../images/coding.png';

export function Menubar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top menubar-bg p-2">
                <div className="container-fluid justify-content-center">
                    <img src={Code} className="px-4 d-none d-lg-block" alt="" />
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav fw-semibold my-2 text-center">
                            <Linkscroll activeClass="active" to="home" spy={true} smooth={true} duration={300} className="menu-item"><li className="nav-item ps-lg-4">Home</li></Linkscroll>
                            <Linkscroll activeClass="active" to="work" spy={true} smooth={true} duration={300} className="menu-item"><li className="nav-item ps-lg-4">Work</li></Linkscroll>
                            <Linkscroll activeClass="active" to="about" spy={true} smooth={true} duration={300} className="menu-item"><li className="nav-item ps-lg-4">About</li></Linkscroll>
                            <Linkscroll activeClass="active" to="certificate" spy={true} smooth={true} duration={300} className="menu-item"><li className="nav-item ps-lg-4">Certification</li></Linkscroll>
                            <Linkscroll activeClass="active" to="skills" spy={true} smooth={true} duration={300} className="menu-item"><li className="nav-item ps-lg-4">Skills</li></Linkscroll>
                            <Linkscroll activeClass="active" to="contact" spy={true} smooth={true} duration={300} className="menu-item"><li className="nav-item ps-lg-4">Contact</li></Linkscroll>
                            <Link to='/helloworld' className="menu-item"><li className="nav-item ps-lg-4">Myworks</li></Link>
                            <Link to="https://drive.google.com/file/d/1nic5NC2ClqKWiHSDAI29nQtPDxmZI0Tn/view?usp=drive_link" target="_blank" className="menu-item"><li className="nav-item ps-lg-4 d-block d-lg-none">Resume</li></Link>
                        </ul>
                    </div>
                    <Link to="https://drive.google.com/file/d/1nic5NC2ClqKWiHSDAI29nQtPDxmZI0Tn/view?usp=drive_link" target="_blank" className="menu-item"><button type="button" class="btn btn-resume rounded-0 me-4 d-none d-lg-block">Resume</button></Link>
                </div>
            </nav>
        </>
    );
}