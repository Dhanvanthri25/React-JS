import React from "react";
import './task10.css';
import SadEmoji from '../../img/sad.png';
import NoneEmoji from '../../img/confused.png';
import HappyEmoji from '../../img/smiling.png';
import { Link } from "react-router-dom";

export function FeedBack(){
    return(
        <>
        <div className="container-fluid feedback-bg vh-100">
            <div className="col-lg-4 mx-auto row text-center h-75">
                <div className="col-lg-12"></div>
                <div className="col-lg-12 col-md-8 mx-auto pt-5 rounded-3 feedbackin-bg">
                <h4>How satisfied are you with our <br/> customer support performance ?</h4>
                    <div className="col-lg-12 d-lg-flex row-sm mt-5 justify-content-between">
                        <div>
                            <Link to="/feedbackthanks"><img src={SadEmoji} className="img-fluid" alt="" /></Link>
                            <h6>Sad</h6>
                        </div>
                        <div>
                            <Link to="/feedbackthanks"><img src={NoneEmoji} className="img-fluid" alt="" /></Link>
                            <h6>None</h6>
                        </div>
                        <div>
                            <Link to="/feedbackthanks"><img src={HappyEmoji} className="img-fluid" alt="" /></Link>
                            <h6>Happy</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12"></div>
            </div>
        </div>
        </>
    );
}