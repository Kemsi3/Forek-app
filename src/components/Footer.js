import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/stylesheets/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="text-container">
                <h4>Dostępność</h4>
                <p>Poniedziałek-Niedziela</p>
                <p>00:00-24:00</p>
            </div>
            <div className="text-container">
                <a href="https://www.instagram.com/autolaweta_forek/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.facebook.com/autolawetaforek" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;