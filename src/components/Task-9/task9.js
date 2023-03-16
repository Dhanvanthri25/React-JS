import React, { useState } from "react";
import './task9.css';
import Mango from '../../img/mango.jpg';
import Banana from '../../img/Banana.png';

export function FruitCount(){
    const[mango,setMango] = useState(0);
    const[banana,setBanana] = useState(0);
    return(
        <>
        <div className="container-fluid fruit-bg py-5">
            <div className="col-lg-10 rounded-5 mx-auto text-center row fruit-bg-in p-5">
                <h1 className="my-5">Bob ate <span className="fruit-txt">{mango}</span> mangoes <span className="fruit-txt">{banana}</span> bananas</h1>
                <div className="col-lg-6 pt-lg-5">
                    <img src={Mango} className="img-fluid h-50" alt=""/><br/><br/>
                    <button type="button" class="btn btn-primary" onClick={()=>setMango(mango+1)}>Eat Mango</button>
                </div>
                <div className="col-lg-6 pt-lg-5">
                    <img src={Banana} className="img-fluid h-50" alt=""/><br/><br/>
                    <button type="button" class="btn btn-primary" onClick={()=>setBanana(banana+1)}>Eat Banana</button>
                </div>
            </div>
        </div>
        </>
    );
}