import React, { Component } from 'react';
import logo from './img/logo.png'

export default class Nav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md mb-2 m-0 border-bottom">
                <a href="https://anukritigoyal.github.io/worksafelanding"><img src={logo} className="logo" alt="logo"></img></a>
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-link">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#">Product</a>
                    </li> 
                    <li className="nav-link">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        )
    }

}

