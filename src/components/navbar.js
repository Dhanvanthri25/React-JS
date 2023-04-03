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
                        <li className="nav-item me-3">
                        <Link to='/' className="link">Portfolio</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/helloworld' className="link">Hello</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/congrats' className="link">Congrats</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/superover' className="link">Super Over</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/socialbuttons' className="link">Social Buttons</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/notifications' className="link">Notifications Application</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/login' className="link">Login Design</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/technologycard' className="link">Technology Cards</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/hooks' className="link">Hooks</Link>
                        </li>
                        <li className="nav-item me-3">
                        <Link to='/fruitcount' className="link">Fruits Counter</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to='/feedback' className="dropdown-item">FeedBack App</Link></li>
                                <li><Link to='/datefunction' className="dropdown-item">Date Function</Link></li>
                                <li><Link to='/products' className="dropdown-item">Products</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}