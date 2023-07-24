"use client"

import React, {  useState } from 'react';
import { databases } from '@/appwrite/config';
import { FaBlog } from 'react-icons/fa';
import { v4 as uuidv4 } from "uuid";

import Navbar from '../Components/Navbar';
import { useRouter } from 'next/navigation';

const BlogForm = () => {

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [metadesc, setMetaDesc] = useState('');
    const [imageUrl, setImageUrl] = useState();



    //* Generate new ID
    const id = uuidv4();

    const data = {
        title: title,
        slug: slug,
        content: content,
        image: imageUrl,
        metadesc: metadesc
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const createDocument = databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID, //* Database ID
            process.env.NEXT_PUBLIC_COLLECTION_ID, //* Collection ID
            `${id}`, //* ID 
            data //* Data object to push the document into collection
        );

        createDocument.then(function (res) {
            console.log(res);
        });

        // Reset the form after submission
        setTitle('');
        setSlug('');
        setMetaDesc('');
        setContent('');
        setImageUrl('');

        router.back();
    };



    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className="max-w-3xl mx-auto p-10 rounded-lg bg-white w-full mt-[10rem]">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Create a<span className='ml-2 text-indigo-500'> New Blog</span> <FaBlog size={40} className='ml-3 text-indigo-500' /></h2>
                    <form >
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-800 font-semibold">
                                Title
                            </label>
                            <input
                                type="text"
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
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows="6"
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter the content"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-gray-800 font-semibold">
                                Meta Description
                            </label>
                            <textarea
                                value={metadesc}
                                onChange={(e) => setMetaDesc(e.target.value)}
                                rows="3"
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter the meta-desc"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="imageUrl" className="block text-gray-800 font-semibold">
                                Image URL
                            </label>
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="block w-full border-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                                placeholder="Enter the image URL"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
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
