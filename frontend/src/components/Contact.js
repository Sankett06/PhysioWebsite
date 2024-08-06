import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            if (response.data.success) {
                toast.success('Your message has been sent successfully!', {
                    position: 'top-right',
                    autoClose: 5000,
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send message. Please try again later.', {
                    position: 'top-right',
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to send message. Please try again later.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
        }
    };

    return (
        <div className="contact-us">
            <section className="contact-intro">
                <div className="contact-intro-content">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Whether you have questions about our services or need assistance, feel free to reach out.</p>
                </div>
            </section>
            <section className="contact-form">
                <div className="form-container">
                    <h2>Get in Touch</h2>
                    {formStatus && <p className="form-status">{formStatus}</p>}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </section>
            <section className="contact-details">
                <div className="details-container">
                    <h2>Our Contact Details</h2>
                    <p><i className="fas fa-phone"></i> Phone: +123 456 7890</p>
                    <p><i className="fas fa-envelope"></i> Email: contact@PhysioCare.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> Address: 123 Health Street, Wellness City, HC 45678</p>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;
