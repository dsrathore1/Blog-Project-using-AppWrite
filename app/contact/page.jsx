"use client"
"use client"
import React, { useEffect } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const ContactModal = () => {
    const handleFormSubmit = () => {
        console.log("Form submitted");
    }

useEffect(()=>{
    document.title = "Blogpost.com | Contact Us";
})

    return (
        <div>
            <Navbar />
            <div className="my-[5rem] flex items-center justify-center z-50">
                <div className="bg-white w-[90%] md:w-[50%] lg:w-[40%] p-6 rounded-lg shadow-lg z-10">
                    <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-gray-800 font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-800 font-semibold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Your Message"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactModal;
