import React from "react";
import './task4.css';

export function SocialButtons(){
    return(
        <>
        <div className="bgsb text-center">
            <div className="container sobox">
            <h1 className="heading my-4">Social Buttons</h1>
            <button type="button" className="btn btn-warning like-color">Like</button>
            <button type="button" className="btn btn-light mx-4">Comment</button>
            <button type="button" className="btn btn-primary share-color">Share</button>
            </div>
        </div>
        </>
    );
}