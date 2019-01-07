import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


import logo from '../../Assets/images/logo/black.jpeg';
import Activities from "../pages/activities";
import Information from "../pages/information";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={logo} class="img-fluid" alt="Responsive image"/>
                </div>

                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Information">Information</Link>
                        </li>
                        <li>
                            <Link to="/Activities">Activities</Link>
                        </li>
                        <li className="last">
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>

            </header>
    );
    }
}

export default Header;
