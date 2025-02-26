"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "camel-safari",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "8148877406:AAG8In6luDNFabkZIgKut3z4Oyr-2bFCzVs"; // Replace with your bot token
    const chatId = "1043162898"; // Replace with your chat ID

    const message = `
      📩 *New Contact Form Submission*
      *Name:* ${formData.name}
      *Email:* ${formData.email}
      *Phone:* ${formData.phone}
      *Service:* ${formData.service}
      *Message:* ${formData.message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "camel-safari",
    });

    alert("Your message has been sent!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch to plan your desert adventure
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-900">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    Shree shyam camel and Jeep Safari
                    <br />
                    Starling hotel, front of New horizon, Savitri Mata road
                    <br />
                    Ajmer, Pushkar, Rajasthan 305022
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-900">
                    Phone
                  </h3>
                  <p className="text-gray-600">+91 9057281019</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-900">
                    Email
                  </h3>
                  <p className="text-gray-600">yespalsingh5134@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-900">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div> */}
            </div>

            {/* Map */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0097167439567!2d74.5444928!3d26.487631999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bc30219fcf083%3A0x3cfc7bd4579a551b!2sShree%20shyam%20camel%20and%20Jeep%20Safari!5e0!3m2!1sen!2sin!4v1740579377107!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Interested Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="camel-safari">Camel Safari</option>
                  <option value="desert-camping">Desert Camping</option>
                  <option value="cultural-tour">Cultural Tour</option>
                  <option value="jeep-safari">Jeep Safari</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-900 focus:border-amber-900"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
