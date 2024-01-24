import React from 'react';
import "../App.css";

function Header() {
    return (
        <>
            <nav className="navbar nav-underline navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand dsp-a fw-bolder" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link fw-bolder active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link fw-bolder" href="#">Orders</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link fw-bolder" href="#">Integrations</a>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link fw-bolder dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tracking Page
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link fw-bolder" href="#">Partner with Us</a>
                            </li>
                        </ul>

                        <form className="d-flex mx-2" role="search">
                            <div className="input-group">
                                <span className="input-group-text fw-bolder search-input" id="search-addon">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input type="search" className="form-control search-input" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            </div>
                        </form>

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link fw-bolder" href="#"><i className="bi bi-person"></i> Account</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link fw-bolder" href="#"> <i className="bi bi-gear"></i> Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
