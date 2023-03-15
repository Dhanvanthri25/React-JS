import React from "react";
import './task2.css';
import Profile from '../../congrats-card-profile-img.png';
import Watch from '../../congrats-card-watch-img.png'

export function Congrats(){
    return(
        <>
        <div className="col-lg-12 pb-5 text-center bgimg">
            <h1 className="py-5">Congratulations</h1>
            <div className="container py-5 rounded-3 w-50 box">
                <img src={Profile} className="img-fluid" alt=""></img>
                <h1 className="my-3">Kiran V</h1>
                <p>Vishnu Institute of Computer Education and Technology,Bhimavaram</p>
                <img src={Watch} className="img-fluid" alt=""></img>
            </div>
        </div>
        </>
    );
}