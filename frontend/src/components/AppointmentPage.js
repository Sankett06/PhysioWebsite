import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AppointmentPage.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact_no: '',
        date: null,
        slot: '',
        age: '',
        condition: '',
        gender: '',
        address: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date: date
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const localDate = new Date(formData.date.getTime() - formData.date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
            const response = await axios.post('http://localhost:5000/api/appointments', {
                ...formData,
                date: localDate // Adjusted date
            });
            toast.success('Appointment booked successfully!', {
                position: 'top-right',
                autoClose: 5000,
            });
            setFormData({
                name: '',
                email: '',
                contact_no: '',
                date: null,
                slot: '',
                age: '',
                condition: '',
                gender: '',
                address: ''
            });
        } catch (error) {
            console.error('Error booking appointment:', error.response ? error.response.data : error.message);
            toast.error('Failed to book appointment.', {
                position: 'top-right',
                autoClose: 5000,
            });
        }
    };

    return (
        <div className="appointment-page">
            <h1>Book an Appointment</h1>
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

                <label htmlFor="contact_no">Contact Number:</label>
                <input
                    type="text"
                    id="contact_no"
                    name="contact_no"
                    value={formData.contact_no}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="date">Select Date:</label>
                <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    required
                />

                <label htmlFor="slot">Select Time Slot:</label>
                <select
                    id="slot"
                    name="slot"
                    value={formData.slot}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a slot</option>
                    {[...Array(14)].map((_, i) => {
                        const hour = 9 + Math.floor(i / 2);
                        const minutes = i % 2 === 0 ? '00' : '30';
                        const slot = `${hour < 10 ? '0' : ''}${hour}:${minutes}:00`;
                        return <option key={slot} value={slot}>{slot}</option>;
                    })}
                </select>

                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <label htmlFor="condition">Condition/Problem (optional):</label>
                <textarea
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="gender">Gender of Therapist (optional):</label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">No Preference</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label htmlFor="address">Address/Location:</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                ></textarea>

                {error && <p className="error">{error}</p>}

                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentPage;
