import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h1>Quality inn</h1>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/checkin">
                    <li>Checkin</li>
                </Link>
                <Link style={navStyle} to="/stayover">
                    <li>Stay over</li>
                </Link>
                <Link style={navStyle} to="/checkout">
                    <li>Checkout</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
