/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { databases } from "@/appwrite/config";

const BlogPage = ({ params }) => {
    const [data, setData] = React.useState([]);
    const router = useRouter();

    const promise_getDocumentsById = databases.getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID, // DATABASE_ID
        process.env.NEXT_PUBLIC_COLLECTION_ID, // COLLECTION_ID
        params.slug  // DOCUMENT_ID
    );


    React.useEffect(() => {
        document.title = `Blogpost.com | Blog`;
        promise_getDocumentsById.then(function (res) {
            setData(res);
        });
    }, []);


    const handleDelete = (e) => {
        // Delete document
        databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID,
            process.env.NEXT_PUBLIC_COLLECTION_ID,
            params.slug
        );
        router.push("/");
        // console.log("Clicked");
    }

    return (
        <>
            <div className="text-white mx-auto p-4 flex items-center justify-center flex-col">
                <div className="flex items-center justify-center mt-5 w-full">
                    <BiArrowBack color="white" className="hover:-translate-x-2 cursor-pointer transition-all ease-linear left-7 absolute " size={30} onClick={() => { router.back() }} />
                    <h1 className="text-4xl font-bold w-[70%] text-center">{data.title}</h1>
                </div>
                <p className="mt-3 text-xl text-gray-400" >{data.slug}</p>
                {data.image && (
                    <img src={data.image} alt={data.title} className="my-4 p-4 rounded-md object-fill" />
                )}
                <p className="text-gray-200 text-justify w-[80%]">{data.content}</p>
                <div className="mt-6 flex space-x-4">
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-lg font-semibold transition-all text-white w-[15vw] h-[7vh] rounded-md">
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
