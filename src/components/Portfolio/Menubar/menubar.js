import React from "react";
import { Link } from "react-router-dom";
import './menubar.css';
import Code from '../images/coding.png';

export function Menubar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top menubar-bg">
            <div className="container-fluid">
                <img src={Code} className="px-4" alt=""/>
                <button className="navbar-toggler align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav fw-semibold my-2 text-center">
                        <Link to='/home' className="menu-item"><li className="nav-item ps-4">Home</li></Link>
                        <Link to='/' className="menu-item"><li className="nav-item ps-4">Work</li></Link>
                        <Link to='/about' className="menu-item"><li className="nav-item ps-4">About</li></Link>
                        <Link to='/' className="menu-item"><li className="nav-item ps-4">Skills</li></Link>
                        <Link to='/contact' className="menu-item"><li className="nav-item ps-4">Contact</li></Link>
                        <Link to='/contact' className="menu-item"><li className="nav-item ps-4 d-block d-lg-none">Resume</li></Link>
                    </ul>
                </div>
                <button type="button" class="btn btn-resume rounded-0 me-4 d-none d-lg-block">Resume</button>
            </div>
        </nav>
        </>
    );
}