import {  useContext } from "react";
import { AppContext } from "../AppContext"

function Inputs() {
    const {HandleChange} =useContext(AppContext)
    return (
    <div className="inputs">
        <input name="title" onChange={HandleChange} placeholder="Title"></input>
        <input name="year" onChange={HandleChange} placeholder="Year"></input>
    </div>
    );
}

export default Inputs;
