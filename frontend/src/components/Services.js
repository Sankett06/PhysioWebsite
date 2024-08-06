import React from 'react';
import './Services.css'; // Import your CSS file for styling

const Services = () => {
    return (
        <div className="services">
            <section className="services-intro">
                <div className="services-intro-content">
                    <h1>Our Services</h1>
                    <p>At PhysioClinic, we offer a range of physiotherapy services to help you recover and maintain your health. Our team of experts provides personalized care tailored to your needs.</p>
                </div>
            </section>
            <section className="service-list">
                <div className="service-item">
                    <i className="fas fa-dumbbell"></i>
                    <h2>Sports Therapy</h2>
                    <p>Specialized care for sports-related injuries, including rehabilitation and performance enhancement.</p>
                </div>
                <div className="service-item">
                    <i className="fas fa-bed"></i>
                    <h2>Post-Surgical Rehabilitation</h2>
                    <p>Customized recovery plans to help you regain strength and mobility after surgery.</p>
                </div>
                <div className="service-item">
                    <i className="fas fa-user-injured"></i>
                    <h2>Chronic Pain Management</h2>
                    <p>Comprehensive strategies to manage and alleviate chronic pain conditions.</p>
                </div>
                <div className="service-item">
                    <i className="fas fa-child"></i>
                    <h2>Pediatric Physiotherapy</h2>
                    <p>Specialized physiotherapy for children, addressing developmental and musculoskeletal issues.</p>
                </div>
                <div className="service-item">
                    <i className="fas fa-heartbeat"></i>
                    <h2>Cardiovascular Rehabilitation</h2>
                    <p>Rehabilitation programs designed to improve cardiovascular health and recovery.</p>
                </div>
                <div className="service-item">
                    <i className="fas fa-bone"></i>
                    <h2>Orthopedic Physiotherapy</h2>
                    <p>Expert care for orthopedic conditions, including joint and bone injuries and recovery.</p>
                </div>
            </section>
        </div>
    );
}

export default Services;
