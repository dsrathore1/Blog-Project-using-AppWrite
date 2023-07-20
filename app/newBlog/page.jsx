"use client"

import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Blog Form Submitted:', { title, slug, content, imageUrl });
        // Reset the form after submission
        setTitle('');
        setSlug('');
        setContent('');
        setImageUrl('');
    };

    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-screen'>
                <Head>
                    <title>Blogpost.com | Add new blog</title>
                </Head>
                <div className="max-w-3xl mx-auto p-10 rounded-lg bg-white w-full">
                    <h2 className="text-3xl font-bold mb-4">Create a New Blog</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-800 font-semibold">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter the title"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="slug" className="block text-gray-800 font-semibold">
                                Slug
                            </label>
                            <input
                                type="text"
                                id="slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter the slug"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-gray-800 font-semibold">
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows="6"
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter the content"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="imageUrl" className="block text-gray-800 font-semibold">
                                Image URL
                            </label>
                            <input
                                type="text"
                                id="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter the image URL"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
                            >
                                Create Blog
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BlogForm;
