import React from 'react';
import { Link } from "react-router-dom";

const toggler = (event) => {
    document.getElementById("navid").setAttribute("style", "transparent");
};

function Nav() {

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light" id="navid">
                <a class="navbar-brand" href="/home">
                    Nirox Foundation
                </a>
                <button
                    class="navbar-toggler"
                    onClick={toggler}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <Link to="/signin">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Sign In
                                 </a>
                            </li>
                        </Link>
                        <Link to="/contactus">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Get in Touch
                                 </a>
                            </li>
                        </Link>
                        <Link to="/credits">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Credits
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
