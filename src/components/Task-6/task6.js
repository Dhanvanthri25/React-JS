import React from "react";
import './task6.css';
import Laptop from '../../laptop.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export function LoginDesign(){
    return(
        <>
        <div className="loginbg p-5">
            <div className="container row mx-auto rounded-5 login-box d-flex">
                <div className="col-lg-6 py-lg-5 my-lg-5 text-center">
                    <img src={Laptop} className="img-fluid w-50 my-5 rounded-circle" alt="laptop"/>
                </div>
                <div className="col-lg-6 my-lg-5 text-center">
                    <h1 className="py-lg-5">Member Login</h1>
                    <form>
                        <div className="div-combo text-start mx-auto rounded-5 w-75"><FontAwesomeIcon icon={faEnvelope} className="px-3"/><input type="email" className="input-items" placeholder="Email"/></div><br/>
                        <div className="div-combo text-start mx-auto my-3 rounded-5 w-75"><FontAwesomeIcon icon={faLock} className="px-3"/><input type="password" className="input-items" placeholder="Password"/></div><br/>
                        <input type="button" className="form-btn rounded-5 mb-5 w-75" value="LOGIN"/><br/>
                        <p>Forget <span className="sp-seperate">Username/Password</span></p>
                        <p className="sp-seperate mt-5">create your account <FontAwesomeIcon icon={faArrowRight}/></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}