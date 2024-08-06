import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
    return (
        <div className="about">
            <section className="about-intro">
                <div className="about-intro-content">
                    <h1>About Us</h1>
                    <p>At PhysioCare, we are dedicated to providing top-quality physiotherapy services to help you achieve optimal health and wellness. Our team of experienced professionals is committed to delivering personalized care tailored to your unique needs.</p>
                </div>
            </section>
            <section className="our-team">
                <h2>Meet Our Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Dr. Jane Doe" />
                        <h3>Dr. Jane Doe</h3>
                        <p>Lead Physiotherapist</p>
                        <p>Dr. Doe specializes in sports injuries and rehabilitation. She has over 10 years of experience and is passionate about helping athletes recover and perform at their best.</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Dr. John Smith" />
                        <h3>Dr. John Smith</h3>
                        <p>Orthopedic Physiotherapist</p>
                        <p>Dr. Smith focuses on orthopedic conditions and has a wealth of experience in managing post-surgical recovery and chronic pain conditions.</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Dr. Emily Johnson" />
                        <h3>Dr. Emily Johnson</h3>
                        <p>Pediatric Physiotherapist</p>
                        <p>Dr. Johnson is dedicated to pediatric physiotherapy, providing specialized care for children with various developmental and musculoskeletal conditions.</p>
                    </div>
                </div>
            </section>
            <section className="our-values">
                <h2>Our Core Values</h2>
                <div className="values-container">
                    <div className="value-item">
                        <i className="fas fa-heart"></i>
                        <h3>Compassion</h3>
                        <p>We treat every patient with empathy and care, ensuring a supportive and understanding environment.</p>
                    </div>
                    <div className="value-item">
                        <i className="fas fa-medal"></i>
                        <h3>Excellence</h3>
                        <p>We strive for the highest standards in our practice, continually improving our skills and techniques.</p>
                    </div>
                    <div className="value-item">
                        <i className="fas fa-users"></i>
                        <h3>Teamwork</h3>
                        <p>We work together as a team to provide the best possible care and support for our patients.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
