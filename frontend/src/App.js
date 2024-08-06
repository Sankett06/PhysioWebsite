import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Appointments from './components/AppointmentPage';
import Contact from './components/Contact';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './components/AdminDashboard';
import DoctorRegistrationPage from './components/DoctorRegistrationPage';


const App = () => {
    return (
        <Router>
            <Navbar />
            <ToastContainer />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/adminDashboard" element={<AdminDashboard />} />
                    <Route path="/doctorRegistrationPage" element={<DoctorRegistrationPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
