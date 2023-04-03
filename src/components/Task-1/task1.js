import React from "react";
import './task1.css';
import Typewriter from 'typewriter-effect';

export function HelloWorld() {
    return (
        <>
            <h1 className="hello position-absolute top-50 start-50 translate-middle">
                <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("Hello World!!!")
                    .deleteAll()
                    .start();
                }}
                />
            </h1>
        </>

    );
}