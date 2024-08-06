import React, { useState } from 'react';
import axios from 'axios';
import './DoctorRegistrationPage.css';

const DoctorRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    qualification: '',
    college: '',
    address: '',
    contact_no: '',
    email: '',
    expertise: '',
    document_required: '',
  });
  const [cv, setCv] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('qualification', formData.qualification);
    formDataToSend.append('college', formData.college);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('contact_no', formData.contact_no);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('expertise', formData.expertise);
    formDataToSend.append('document_required', formData.document_required);
    if (cv) {
      formDataToSend.append('cv', cv);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/doctors', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
      setFormData({
        name: '',
        gender: '',
        qualification: '',
        college: '',
        address: '',
        contact_no: '',
        email: '',
        expertise: '',
        document_required: '',
      });
      setCv(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to register doctor.');
    }
  };

  return (
    <div className="doctor-registration-form">
      <h1>Register Doctor</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="qualification">Qualification:</label>
        <select id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} required>
          <option value="">Select Qualification</option>
          <option value="BPT">BPT</option>
          <option value="MPT">MPT</option>
          <option value="DIPLOMA">DIPLOMA</option>
        </select>

        <label htmlFor="college">College:</label>
        <input type="text" id="college" name="college" value={formData.college} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />

        <label htmlFor="contact_no">Contact Number:</label>
        <input type="text" id="contact_no" name="contact_no" value={formData.contact_no} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="expertise">Expertise:</label>
        <input type="text" id="expertise" name="expertise" value={formData.expertise} onChange={handleChange} required />

        <label htmlFor="document_required">Document Required:</label>
        <select id="document_required" name="document_required" value={formData.document_required} onChange={handleChange} required>
          <option value="">Select Document</option>
          <option value="result">Result</option>
          <option value="experience">Experience</option>
        </select>

        <label htmlFor="cv">Upload CV:</label>
        <input type="file" id="cv" name="cv" onChange={handleFileChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DoctorRegistrationPage;
