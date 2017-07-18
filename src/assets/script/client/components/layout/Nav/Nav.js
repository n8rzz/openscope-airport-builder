import React from 'react';
import { Link } from 'react-router';

const Nav = function() {
    return (
        <div className="nav">
            <ul className="hlist">
                <li>
                    <Link to="/">Airport</Link>
                </li>
                <li>
                    <Link to="/fixes">Fixes</Link>
                </li>
                <li>
                    <Link to="/runways">Runways</Link>
                </li>
                <li>
                    <Link to="/procedures">Procedures</Link>
                </li>
                <li>
                    Spawn Patterns
                </li>
                <li>
                    Airspace
                </li>
                <li>
                    Restricted Areas
                </li>
            </ul>
        </div>
    );
};

Nav.displayName = 'Nav';

export default Nav;
