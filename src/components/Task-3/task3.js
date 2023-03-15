import React from "react";
import './task3.css';
import RCB from '../../RCB_Banner.png';
import CSK from '../../CSK-Banner.jpg'

export function SuperOver(){
    return(
        <>
        <div className="bg text-center p-5">
            <h1>Super Over League</h1>
            <div className="container d-flex mt-5">
                <div className="col-lg-6">
                    <img src={RCB} className="img-fluid h-100 w-100" alt=""/>
                </div>
                <div className="col-lg-6">
                    <img src={CSK} className="img-fluid h-100 w-100" alt=""/>
                </div>
            </div>
        </div>
        </>
    );
}