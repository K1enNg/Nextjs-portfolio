"use client";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/resend", formData);
      if (response.data.success) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <section className="py-16 px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      {status && <p className="text-center text-green-500 mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-violet-950 to-red-950 text-white font-semibold rounded-lg  hover:to-black"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
