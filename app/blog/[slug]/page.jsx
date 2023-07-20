/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Client, Databases, Query } from "appwrite";


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64b789dcbdf036484cfe');



const BlogPage = ({ params }) => {
    const router = useRouter();
    const { slug } = params;
    const blogPost = {
        title: 'Example Blog Post',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat odio sit amet velit tincidunt, et semper sem bibendum. Nunc vitae bibendum elit. Fusce nec mauris eget neque convallis rhoncus. Nulla facilisi. Cras non purus nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat odio sit amet velit tincidunt, et semper sem bibendum. Nunc vitae bibendum elit. Fusce nec mauris eget neque convallis rhoncus. Nulla facilisi. Cras non purus nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat odio sit amet velit tincidunt, et semper sem bibendum. Nunc vitae bibendum elit. Fusce nec mauris eget neque convallis rhoncus. Nulla facilisi. Cras non purus nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat odio sit amet velit tincidunt, et semper sem bibendum. Nunc vitae bibendum elit. Fusce nec mauris eget neque convallis rhoncus. Nulla facilisi. Cras non purus nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat odio sit amet velit tincidunt, et semper sem bibendum. Nunc vitae bibendum elit.',
        image: 'https://d3sujgifhk94se.cloudfront.net/wp-content/uploads/2023/06/29133450/Should-kids-learn-text-based-coding.jpg',
        slug: slug || 'example-blog-post', // In case of server-side rendering, slug will be available in router.query.slug
    };

    React.useEffect(() => {
        document.title = `${blogPost.title}`;
    })

    return (
        <>
            <div className="text-white mx-auto p-4 flex items-center justify-center flex-col">
                <div className="flex items-center gap-[28rem] justify-start w-full">
                    <BiArrowBack color="white" className="hover:-translate-x-2 cursor-pointer transition-all ease-linear" size={30} onClick={() => { router.back() }} />
                    <h1 className="text-6xl font-bold mt-5">{blogPost.title}</h1>
                </div>
                {blogPost.image && (
                    <img src={blogPost.image} alt={blogPost.title} className="my-4 w-[60%] p-4 rounded-md" />
                )}
                <p className="text-gray-200 text-justify w-[80%]">{blogPost.content}</p>
                <div className="mt-6 flex space-x-4">
                    <button className="bg-red-500 hover:bg-red-700 text-lg font-semibold transition-all text-white w-[15vw] h-[7vh] rounded-md">
                        Delete
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-lg font-semibold text-white w-[15vw] transition-all h-[7vh] rounded-md">
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
