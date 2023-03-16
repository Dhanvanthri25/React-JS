import React, { useState } from "react";

export function Hooks(){
    const[counts,setCounts] = useState(0);
    return(
        <>
        <div className="text-center mt-5">
            <label>Value : {counts}</label><br/><br/>
            <button type="button" class="btn btn-primary" onClick={()=>setCounts(counts+1)}>Increment</button><br/><br/>
            <button type="button" class="btn btn-primary" onClick={()=>setCounts(counts-1)}>Decrement</button><br/><br/>
            <button type="button" class="btn btn-primary" onClick={()=>setCounts(counts*0)}>Reset</button><br/><br/>
        </div>
        </>
    );
}