/* eslint-disable no-unused-vars */
import React from "react"
import logo from "../assets/react.svg"

export default function Navbar(){
    return(
        <nav>
        <img className="nav-logo" src={logo} alt="react logo" />
            <h3 className="nav-head">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}
