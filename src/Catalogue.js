import React from "react";
import "./Catalogue.css";
import DisplayDescription from "./DisplayDescription";

export default function Catalogue(){
    return (
        <div className="Catalogue">
            <h1>Some ancient breed dogs</h1>
            <h2> Click on photo to find out more!</h2>
               <DisplayDescription />
        </div>
    );
}