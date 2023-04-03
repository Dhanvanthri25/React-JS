import React, { useEffect, useState } from "react";
import './task12.css';

export function Products() {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://642a643d6bcf2c337b507c69--darling-squirrel-59b93f.netlify.app/data.json')
        .then(shoe => shoe.json())
        .then(data => setDetails(data))
    })

    return (
        <>
            <div className="conatiner-fluid m-4">
                <h1>Nike Shoes</h1>
                <div className="col-lg-12 row justify-content-between">
                    {
                        details.map((value, index) => (
                            <>
                                <div class="card col-lg-3 my-2 product-card">
                                    <img src={value.imageURL} class="card-img-top h-100" alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">Product Name: {value.name}</h5>
                                        <h6 class="card-subtitle mb-2">Brand: {value.brand}</h6>
                                        <h6 class="card-subtitle mb-2">Gender: {value.gender}</h6>
                                        <h6 class="card-subtitle mb-2">Category: {value.category}</h6>
                                        <h6 class="card-subtitle mb-2">Price: {value.price}</h6>
                                        <h6 class="card-subtitle mb-2">Items Left: {value.items_left}</h6>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}