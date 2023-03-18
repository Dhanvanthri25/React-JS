import React from "react";
import './task2.css';
import Profile from '../../img/congrats-card-profile-img.png';
import Watch from '../../img/congrats-card-watch-img.png';

export function Congrats(){
    return(
        <>
        <div className="col-12 pb-5 text-center bgimg vh-100">
            <h1 className="py-5">Congratulations</h1>
            <div className="container py-5 rounded-3 w-75 h-75 box">
                <img src={Profile} className="img-fluid" alt=""></img>
                <h1 className="my-3">Kiran V</h1>
                <p>Vishnu Institute of Computer Education and Technology,Bhimavaram</p>
                <img src={Watch} className="img-fluid" alt=""></img>
            </div>
        </div>
        </>
    );
}