import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Add your CSS for styling

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [view, setView] = useState('total'); // 'total' or 'today'
    const [totalCount, setTotalCount] = useState(0);
    const [todayCount, setTodayCount] = useState(0);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const baseURL = 'http://localhost:5000'; // Update if needed
                let endpoint = `${baseURL}/api/appointments`;
                if (view === 'today') {
                    endpoint += '/today';
                }
                console.log(`Fetching from endpoint: ${endpoint}`); // Debug log
                const response = await axios.get(endpoint);
                console.log('Fetched data:', response.data); // Debug log
                setAppointments(response.data);
                
                // Update counts based on view
                if (view === 'total') {
                    setTotalCount(response.data.length);
                } else {
                    setTodayCount(response.data.length);
                }
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [view]);

    const handleViewChange = (newView) => {
        setView(newView);
        // Update count when switching views
        if (newView === 'total') {
            setAppointments([]);
            setTodayCount(0);
        } else if (newView === 'today') {
            setAppointments([]);
            setTotalCount(0);
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="view-buttons">
                <button onClick={() => handleViewChange('total')}>
                    Total Appointments ({totalCount})
                </button>
                <button onClick={() => handleViewChange('today')}>
                    Today's Appointments ({todayCount})
                </button>
            </div>
            <div className="appointment-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Booked At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? (
                            appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.id}</td>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.email}</td>
                                    <td>{appointment.contact_no}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                    <td>{new Date(appointment.booked_at).toLocaleString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No appointments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
