import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import ThemeHandler from '../ThemeHandler';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar shadow-sm py-4" id="nav_toggle">
                <div className="container-fluid mx-lg-5 d-flex align-items-center">
                    <Link to="/">
                        <span className="navbar-brand mb-0 h1" id="site_title">
                            Where in the world?
                        </span>
                    </Link>

                    <div className="toggle ms-auto d-flex align-items-center">
                        <ThemeHandler />
                    </div>
                </div>
            </nav>
        </header>
    );
}
