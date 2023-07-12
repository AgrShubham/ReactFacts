/* eslint-disable no-unused-vars */
import React from "react"

export default function Main(){
    return(
        <div className="main-container">
            <img className="back-logo" src="src/assets/react-back.svg" alt="react logo" />
            <h1 className="main-head">Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps including mobile apps</li>
            </ul>
        </div>
    )
}
