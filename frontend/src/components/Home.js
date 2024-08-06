import React from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to PhysioCare</h1>
                    <p>Your journey to a healthier life starts here</p>
                    <a href="/appointments" className="btn-primary">Book an Appointment</a>
                </div>
            </section>
            <section className="services">
                <div className="services-container">
                    <div className="service-item">
                        <i className="fas fa-hand-holding-heart"></i>
                        <h2>Personalized Care</h2>
                        <p>Get personalized treatment plans tailored to your needs.</p>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-people-carry"></i>
                        <h2>Experienced Therapists</h2>
                        <p>Our therapists have years of experience and expertise.</p>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-calendar-check"></i>
                        <h2>Flexible Scheduling</h2>
                        <p>Book appointments that fit your schedule.</p>
                    </div>
                </div>
            </section>
            <section className="testimonial">
                <h2>What Our Patients Say</h2>
                <div className="testimonial-container">
                    <div className="testimonial-item">
                        <p>"The best physiotherapy experience I've ever had. Highly recommend!"</p>
                        <h3>Jane Doe</h3>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="testimonial-item">
                        <p>"Professional staff and effective treatments. My recovery has been swift."</p>
                        <h3>John Smith</h3>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
