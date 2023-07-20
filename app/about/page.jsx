/* eslint-disable @next/next/no-img-element */
// components/About.js
"use client"

import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {

    useEffect(()=>{
        document.title = "Blogpost.com | About Us"
    })

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
                        <p className="text-xl text-center">
                            At My Blog, we are on a mission to bring you the best stories and
                            insights from around the world. Our team of passionate writers is
                            dedicated to providing valuable content that keeps you informed,
                            entertained, and inspired.
                        </p>
                    </div>
                    <div className="grid gap-y-12 gap-x-8 grid-cols-3">
                        {/* Section 1 */}
                        <div className="rounded-lg overflow-hidden shadow-lg p-4 h-[57vh] bg-white text-black">
                            <img
                                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_A_Content_Writer.jpg"
                                alt="About Us 1"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2">Passionate Writers</h2>
                                <p className="text-gray-600 font-medium">
                                    Our team consists of talented and passionate writers who love
                                    to share their knowledge and expertise with our readers. We
                                    believe in the power of storytelling to create meaningful
                                    connections and inspire change.
                                </p>
                            </div>
                        </div>
                        {/* Section 2 */}
                        <div className="rounded-lg overflow-hidden shadow-lg p-4 h-[57vh] bg-white text-black">
                            <img
                                src="https://www.socialpilot.co/wp-content/uploads/2021/08/12-Popular-Blog-Examples-To-Drive-Leads-With-Great-Content.jpg"
                                alt="About Us 2"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2">Inspiring Content</h2>
                                <p className="text-gray-600 font-medium">
                                    Our goal is to create content that not only informs but also
                                    inspires our readers. From thought-provoking articles to
                                    captivating stories, we strive to make your reading experience
                                    enjoyable and enriching.
                                </p>
                            </div>
                        </div>
                        {/* Section 3 */}
                        <div className="rounded-lg overflow-hidden shadow-lg p-4 h-[57vh] bg-white text-black">
                            <img
                                src="https://i.pinimg.com/originals/fe/d1/a4/fed1a411f5b658a9b80c796b911d279f.jpg"
                                alt="About Us 3"
                                className="w-full rounded-lg h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2">Global Reach</h2>
                                <p className="text-gray-600 font-medium">
                                    Our blog reaches readers from all corners of the world. We
                                    value diversity and aim to create a community where different
                                    perspectives are celebrated and embraced. Join us on this
                                    exciting journey!
                                </p>
                            </div>
                        </div>
                        {/* Section 4 */}
                        <div className="rounded-lg overflow-hidden shadow-lg p-4 h-[57vh] bg-white text-black">
                            <img
                                src="https://www.searchenginejournal.com/wp-content/uploads/2021/08/seo-content-writing-vs.-seo-copywriting-whats-the-difference-611bd804a821f-sej-1520x800.webp"
                                alt="About Us 4"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2">Expert Contributors</h2>
                                <p className="text-gray-600 font-medium">
                                    Our blog features contributions from industry experts and
                                    specialists who bring their unique perspectives and insights to
                                    our platform. With their expertise, we provide in-depth and
                                    reliable content to our readers.
                                </p>
                            </div>
                        </div>
                        {/* Section 5 */}
                        <div className="rounded-lg overflow-hidden shadow-lg p-4 h-[57vh] bg-white text-black">
                            <img
                                src="https://sustainingcommunity.files.wordpress.com/2016/02/community-engagement.png"
                                alt="About Us 5"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2">Community Engagement</h2>
                                <p className="text-gray-600 font-medium">
                                    We encourage active participation and engagement from our
                                    readers. Our comments section and social media channels provide
                                    a platform for open discussions and meaningful interactions
                                    within our community.
                                </p>
                            </div>
                        </div>
                        {/* Section 6 */}
                        <div className="rounded-lg overflow-hidden shadow-lg p-4 h-[57vh] bg-white text-black">
                            <img
                                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F4192b0a3-cc47-4915-b68f-abef04abe3e6_3592x2414.jpeg"
                                alt="About Us 6"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2">Continuous Growth</h2>
                                <p className="text-gray-600 font-medium">
                                    We are committed to constant improvement and growth. As we
                                    evolve, we seek feedback from our readers and implement
                                    innovative ideas to enhance the user experience and deliver
                                    valuable content that meets their needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;
