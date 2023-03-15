import React from "react";
import './task7.css';
import Datascientist from '../../img/datascientist.png';
import IOT from '../../img/iothome.png';
import VR from '../../img/vrdeveloper.png';
import ML from '../../img/mlengineer.png';

export function TechnologyCards(){
    return(
        <>
        <div className="container-fluid text-center tech-bg p-5">
            <h1 className="mb-4">Learn 4.0 Technologies</h1>
            <p>Get trained by alumni of IIT's and top companies like Amazon,Microsoft,Intel,<br/>Nvidia,Qualcommm,etc.Learn directly from professionals involved in product<br/> Developement.</p>
            <div className="container">
                <div class="row mb-4">
                    <div class="col-lg-6 mb-3 mb-lg-0">
                        <div class="card card1-shadow">
                            <div class="card-body text-start">
                                <h5 class="card-title">Data Scientist</h5>
                                <p class="card-text">Data scientists gather and analyze large amount of structured and unstructured data</p>
                                <img src={Datascientist} className="w-25 float-end" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card card2-shadow">
                            <div class="card-body text-start">
                                <h5 class="card-title">IOT Developer</h5>
                                <p class="card-text">IoT Developer are professionals who can develop,manage and moniter Iot devices</p>
                                <img src={IOT} className="w-25 float-end" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-3 mb-lg-0">
                        <div class="card card3-shadow">
                            <div class="card-body text-start">
                                <h5 class="card-title">VR Developer</h5>
                                <p class="card-text">A VR developer creates completely new digital environment that people can see</p>
                                <img src={VR} className="w-25 float-end" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card card4-shadow">
                            <div class="card-body text-start">
                                <h5 class="card-title">ML Engineer</h5>
                                <p class="card-text">Machine learning engineers feeds the dada info models defined by data scientists</p>
                                <img src={ML} className="w-25 float-end" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}