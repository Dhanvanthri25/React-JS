import React from "react";
import './feedback.css';
import Heart from '../../img/heart.png';

export function FeedBackThanks(){
    return(
        <>
        <div className="container-fluid feedback-bg vh-100">
            <div className="col-lg-8 col-md-8 col-8 mt-4 rounded-3 feedbackin-bg position-absolute top-50 start-50 translate-middle text-center h-75">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <img src={Heart} alt=""/>
                    <h3>Thank You!</h3>
                    <p>We will use your feedback to improve our customer support performance</p>
                </div>
            </div>
        </div>
        </>
    );
}