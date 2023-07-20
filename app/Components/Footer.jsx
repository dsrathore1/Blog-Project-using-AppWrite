// components/Footer.js

import React from 'react';
import Link from "next/link";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 w-[25%]">
                        <h3 className="text-2xl font-bold">Stay Connected</h3>
                        <p className="text-lg mt-2">
                            Follow us on social media for the latest updates and news.
                        </p>
                        <div className="flex mt-4 space-x-4">
                            <Link
                                href="#"
                                className="text-white hover:text-indigo-500 transition duration-300"
                            >
                                <FaFacebookF className="text-xl" />
                            </Link>
                            <Link
                                href="#"
                                className="text-white hover:text-indigo-500 transition duration-300"
                            >
                                <FaTwitter className="text-xl" />
                            </Link>
                            <Link
                                href="#"
                                className="text-white hover:text-indigo-500 transition duration-300"
                            >
                                <FaInstagram className="text-xl" />
                            </Link>
                            <Link
                                href="#"
                                className="text-white hover:text-indigo-500 transition duration-300"
                            >
                                <FaLinkedinIn className="text-xl" />
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <nav className="space-y-2 text-lg flex-col flex items-start">
                            <Link href="/" className="text-gray-300 hover:text-indigo-500 transition duration-300">Home
                            </Link>
                            <Link href="/about" className="text-gray-300 hover:text-indigo-500 transition duration-300">About
                            </Link>
                            <Link href="/contact" className="text-gray-300 hover:text-indigo-500 transition duration-300">Contact Us
                            </Link>
                        </nav>
                    </div>
                    <div className='mr-[10rem]'>
                        <h3 className="text-2xl font-bold">Contact</h3>
                        <p className="text-lg mt-2">
                            Email: info@example.com
                            <br />
                            Phone: +1 123-456-7890
                        </p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-300">
                        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
