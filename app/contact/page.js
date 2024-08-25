"use client";

import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2';
import './global.css'
import Image from 'next/image';
import { countries } from '@/components/data';


const services = [
    "School and University Counselling",
    "Tutoring",
    "Admission Documents Preparation",
    "Visa Support",
    "Career Orientation and Mentoring",
    "Guardianship Services"
  ];




const page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        countryCode: '+44',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleCountryCodeChange = (e) => {
        setFormData({ ...formData, countryCode: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const fullPhoneNumber = `${formData.countryCode} ${formData.phone}`;
    
        const response = await fetch('https://formspree.io/f/xdknyrjp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: fullPhoneNumber,
            service: formData.service,
            message: formData.message,
          }),
        });
    
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            countryCode: '+44',
            phone: '',
            service: '',
            message: '',
          });
        } else {
          alert('There was an error submitting the form.');
        }
      };



  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-8">
        <div className="contact-header">
            <h2><span>Have Questions?</span><br></br> contact us</h2>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
                <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="inputField"
                required
                />
                <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="inputField"
                required
                />
            </div>
            <div className="formGroup">
                <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="inputField"
                required
                />
            </div>
            <div className="formGroup-phone">
                <div className="phoneGroup">
                    <select 
                        className="countryCode" 
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleCountryCodeChange}
                        required
                    >
                        <option value="+44">+44 (UK)</option>
                        <option value="+1">+1 (US)</option>
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="phoneInput"
                        required
                    />
                </div>
            </div>
            <div className="formGroup">
                <div className="mdEInput1">
                <select 
                    name="service" 
                    onChange={handleChange} 
                    className="mdEAnswer"
                    value={formData.service}
                >
                    <option value="" disabled>Select a Service</option>
                    <option value="Tutoring">Tutoring</option>
                    <option value="Visa Support">Visa Support</option>
                    <option value="Career Mentoring">Career Mentoring</option>
                    <option value="University Counselling">University Counselling</option>
                    <option value="Guardianship Services">Guardianship Services</option>
                    <option value="Document Preparation">Document Preparation</option>
                </select>
                </div>
            </div>
            <div className="formGroup">
                <textarea
                name="message"
                placeholder="Message to the team (optional)"
                value={formData.message}
                onChange={handleChange}
                className="textArea"
                />
            </div>
            <button type="submit" className="contact-button">
                    <div className="contact-button-sign">➔</div>
                    <span className="contact-button-text">Send us a message</span>
            </button>
        </form>
    </main>
  )
}

export default page