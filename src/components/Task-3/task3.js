import React from "react";
import './task3.css';
import RCB from '../../img/rcb-img.png';
import CSK from '../../img/csk-img.png';

export function SuperOver(){
    return(
        <>
        <div className="bg h-100 text-center p-5">
            <h1>Super Over League</h1>
            <div className="container row mt-5 mx-auto">
                <div className="col-lg-6 m-0 p-0">
                    <img src={RCB} className="img-fluid col-lg-12" alt=""/>
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <img src={CSK} className="img-fluid col-lg-12" alt=""/>
                </div>
            </div>
        </div>
        </>
    );
}