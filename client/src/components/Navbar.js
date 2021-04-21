import React from 'react';
import { Link } from "react-router-dom";
import '../assets/navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    <i className="fa fa-id-card mr-1"></i>
                Contact Management App
            </div>

            </div>
            <div className="nav-btn">
                <label forhtml="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/addContact">Add Contact</Link>
                <Link to="/contacts">My Contacts</Link>
                <Link to="/sign-in">sign Up</Link>
                <Link to="/sign-out">logout</Link>
            </div>
        </div>
    )
}

export default Navbar
