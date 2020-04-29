import React from 'react'
import {NavLink} from "react-router-dom"
import "./png.scss"
export default function PNF() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <NavLink className="ab" to="/">Return Home Page</NavLink>
            </div>
        </div>

    )
}
