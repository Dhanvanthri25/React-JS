import React from "react";
import './task7.css'

export function TechnologyCards(){
    return(
        <>
        <div className="container-fluid text-center tech-bg p-5">
            <h1 className="mb-4">Learn 4.0 Technologies</h1>
            <p>Get trained by alumni of IIT's and top companies like Amazon,Microsoft,Intel,<br/>Nvidia,Qualcommm,etc.Learn directly from professionals involved in product<br/> Developement.</p>
            <div className="container w-50">
                <div class="row mb-4">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body text-start">
                                <h5 class="card-title">Data Scientist</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body text-start">
                                <h5 class="card-title">IOT Developer</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body text-start">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body text-start">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}