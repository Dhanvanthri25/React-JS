import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 navbar-style">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-3 text-decoration-underline head-bg">Moodle-Tasks</li>
                        <Link to='/' className="link"><li className="nav-item me-3">Hello</li></Link>
                        <Link to='/congrats' className="link"><li className="nav-item me-3">Congrats</li></Link>
                        <Link to='/superover' className="link"><li className="nav-item me-3">Super Over</li></Link>
                        <Link to='/socialbuttons' className="link"><li className="nav-item me-3">Social Buttons</li></Link>
                        <Link to='/notifications' className="link"><li className="nav-item me-3">Notifications Application</li></Link>
                        <Link to='/login' className="link"><li className="nav-item me-3">Login Design</li></Link>
                        <Link to='/technologycard' className="link"><li className="nav-item me-3">Technology Cards</li></Link>
                        <Link to='/profile' className="link"><li className="nav-item">Portfolio</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}