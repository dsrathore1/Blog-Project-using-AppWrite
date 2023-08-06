"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineLogin } from 'react-icons/ai';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignUpModal = () => {

    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: "",
    });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.title = "Blogpost.com | Sign Up"
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <form className="bg-white w-[30%] h-[75vh] p-6 rounded-lg shadow-lg relative">
                <h2 className="text-4xl font-bold mb-4 text-center">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        value={userDetails.username}
                        onChange={(e) => setUserDetails({
                            ...userDetails,
                            username: e.target.value
                        })}
                        className="block w-full border-[1.59px] border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                        placeholder='Enter your username'
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={userDetails.email}
                        onChange={(e) => {
                            setUserDetails({
                                ...userDetails,
                                email: e.target.value
                            })
                        }}
                        className="block w-full border-[1.59px] border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                        placeholder='Enter your email'
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <div className='flex gap-3 items-center justify-center'>
                        <input
                            type={visible ? "text" : "password"}
                            value={userDetails.password}
                            onChange={(e) => {
                                setUserDetails({
                                    ...userDetails,
                                    password: e.target.value
                                })
                            }}
                            className="block w-full border-[1.59px] border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                            placeholder='Enter your password'
                        />
                        <button onClick={(e) => {
                            e.preventDefault();
                            setVisible(!visible);
                        }}>{visible ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}</button>
                    </div>
                </div>
                <div className="flex justify-between flex-col items-center mb-4">
                    <button className="w-full h-[3rem] flex justify-center items-center gap-3 font-bold uppercase bg-indigo-500 text-white px-4 py-2 rounded-lg focus:outline-none"
                    >
                        Sign Up <AiOutlineLogin className='rotate-180' size={24} />
                    </button>
                    <div className="flex items-center justify-center mt-10 gap-5 space-x-2">
                        <button className="bg-red-600 flex items-center justify-center text-white h-[4rem] gap-5 font-semibold w-[12rem] shadow-lg rounded-lg focus:outline-none" >
                            Sign up with <FaGoogle size={30} />
                        </button>
                        <button className="bg-gray-800 flex items-center justify-center text-white h-[4rem] gap-5 font-semibold w-[12rem] shadow-lg rounded-lg focus:outline-none">
                            Sign up with <FaGithub size={30} />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between flex-col items-center bottom-3 left-[23%] absolute">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="text-indigo-500">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUpModal;
