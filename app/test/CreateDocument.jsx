"use client"

import React from 'react';
import { databases } from '@/appwrite/config';
import { v4 as uuidv4 } from "uuid";

const CreateDocument = () => {

    const data = {
        title: "The Power of ReactJS: Building Dynamic Web Applications",
        slug: "exploring-nextjs-13-latest-advancements-web-development",
        content: "In the rapidly evolving landscape of web development, ReactJS has emerged as a prominent player, revolutionizing the way we build dynamic and feature-rich web applications. Created and maintained by Facebook, ReactJS is an open-source JavaScript library that has gained immense popularity for its simplicity, reusability, and performance. In this blog, we'll explore the fundamentals of ReactJS, its benefits, and how it enables developers to craft stunning user interfaces that captivate users. ReactJS, often simply referred to as React, is a JavaScript library for building user interfaces. Unlike traditional web development frameworks, React employs a declarative approach, allowing developers to describe how their user interfaces should look and behave in different states. This enables a more efficient development process and promotes code reusability.",
        image: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
        metadesc: " Dive into the world of ReactJS and discover how this cutting-edge."
    }

    const handle_createDocument = async () => {
        const id = uuidv4();
        const createNewDocument = databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID, //* Database ID
            process.env.NEXT_PUBLIC_COLLECTION_ID, //* Collection ID
            `${id}`, //* Document ID
            data
        );

        await createNewDocument.then(function (res) {
            console.log(res)
        }, function (err) {
            console.log(err);
        });
    }

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-white mb-4">Create New Document</h1>
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handle_createDocument}>Create Document</button>
            </div>
        </>
    )
}

export default CreateDocument