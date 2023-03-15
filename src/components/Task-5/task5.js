import React from "react";
import './task5.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck,faBell} from '@fortawesome/free-regular-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

export function Notification(){
    return(
        <>
        <div>
            <div className="text-center">
                <h1 className="fw-bolder my-5">Notifications</h1>
                <div className="container text-start not-box">
                    <div className="p-2 rounded-1 not-info">
                        <p className="pt-3"><FontAwesomeIcon className="px-3" icon={faCircleCheck}/>Information Message</p>
                    </div>
                    <div className="p-2 my-4 rounded-1 not-suc">
                        <p className="pt-3"><FontAwesomeIcon className="px-3" icon={faCircleCheck}/>Success Message</p>
                    </div>
                    <div className=" p-2 my-4 rounded-1 not-warn">
                        <p className="pt-3"><FontAwesomeIcon className="px-3" icon={faBell}/>Warning Message</p>
                    </div>
                    <div className="p-2 rounded-1 not-err">
                        <p className="pt-3"><FontAwesomeIcon className="px-3" icon={faCircleExclamation}/>Error Message</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}