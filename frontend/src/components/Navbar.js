import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/images/PHYSIOCARE2.png" height={17} className="navbar-logo-img" />
                    PHYSIOCARE
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/appointments" className="nav-links">Appointments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/adminDashboard" className="nav-links">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/DoctorRegistrationPage" className="nav-links">doctor</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
