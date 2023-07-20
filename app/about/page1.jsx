/* eslint-disable @next/next/no-img-element */
// components/About.js

import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-900 text-white py-16">
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
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Section 1 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/about-1.jpg"
                            alt="About Us 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Passionate Writers</h2>
                            <p className="text-gray-300">
                                Our team consists of talented and passionate writers who love
                                to share their knowledge and expertise with our readers. We
                                believe in the power of storytelling to create meaningful
                                connections and inspire change.
                            </p>
                        </div>
                    </div>
                    {/* Section 2 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/about-2.jpg"
                            alt="About Us 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Inspiring Content</h2>
                            <p className="text-gray-300">
                                Our goal is to create content that not only informs but also
                                inspires our readers. From thought-provoking articles to
                                captivating stories, we strive to make your reading experience
                                enjoyable and enriching.
                            </p>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/about-3.jpg"
                            alt="About Us 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Global Reach</h2>
                            <p className="text-gray-300">
                                Our blog reaches readers from all corners of the world. We
                                value diversity and aim to create a community where different
                                perspectives are celebrated and embraced. Join us on this
                                exciting journey!
                            </p>
                        </div>
                    </div>
                    {/* Section 4 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/about-4.jpg"
                            alt="About Us 4"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Expert Contributors</h2>
                            <p className="text-gray-300">
                                Our blog features contributions from industry experts and
                                specialists who bring their unique perspectives and insights to
                                our platform. With their expertise, we provide in-depth and
                                reliable content to our readers.
                            </p>
                        </div>
                    </div>
                    {/* Section 5 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/about-5.jpg"
                            alt="About Us 5"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Community Engagement</h2>
                            <p className="text-gray-300">
                                We encourage active participation and engagement from our
                                readers. Our comments section and social media channels provide
                                a platform for open discussions and meaningful interactions
                                within our community.
                            </p>
                        </div>
                    </div>
                    {/* Section 6 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/about-6.jpg"
                            alt="About Us 6"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Continuous Growth</h2>
                            <p className="text-gray-300">
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
    );
};

export default About;
