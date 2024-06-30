import React from "react";
import '../assets/stylesheets/Navbar.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">AUTOLAWETA FOREK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-collapse-custom justify-content-between" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" id="nav-services" href="#services-section">Usługi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-gallery" href="#gallery-section">Galeria</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-contact" href="#contact-section">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
