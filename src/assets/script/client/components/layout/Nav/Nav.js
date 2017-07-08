import React, { Component } from 'react';
import { Link } from 'react-router';

const Nav = function() {
    // render() {
        return (
            <div className="nav">
                <ul className="hlist">
                    <li>
                        <Link to="/">Base</Link>
                    </li>
                    <li>
                        <Link to="/fixes">Fixes</Link>
                    </li>
                    <li>
                        <Link to="/runways">Runways</Link>
                    </li>
                </ul>
            </div>
        );
    // }
}

Nav.displayName = 'Nav';

export default Nav;
