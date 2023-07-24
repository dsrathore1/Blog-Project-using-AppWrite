"use client"

import { account } from '@/appwrite/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineLogin } from 'react-icons/ai';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const LoginModal = () => {
    const [errorFound, setErrorFound] = useState(false);
    const router = useRouter();


    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        //* Main logic
        try {
            await account.createEmailSession(
                userDetails.email,
                userDetails.password
            );
            router.push("/");
            setErrorFound(false);
        } catch (error) {
            console.log(error);
            setErrorFound(true);
        }
    };

    //* Set the Title
    useEffect(() => {
        document.title = "Blogpost.com | Login";
    });

    return (
        <>
            {errorFound ? <h1 className='text-red-500 text-lg font-semibold top-[10%] left-[40%] absolute'>Please check your email & password</h1> : <></>}
            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="bg-white w-[30%] h-[70vh] p-6 rounded-lg shadow-lg relative">
                    <h2 className="text-4xl font-bold mb-4 text-center">Login</h2>
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
                                type={showPassword ? "text" : "password"}
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
                            <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}</button>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col items-center mb-4">
                        <button onClick={handleLogin} className="w-full h-[3rem] flex justify-center items-center gap-3 font-bold uppercase bg-indigo-500 text-white px-4 py-2 rounded-lg focus:outline-none">Login <AiOutlineLogin size={24} /></button>

                        <h1 className='mt-5'>or continue with</h1>
                        <div className="flex items-center justify-center mt-4 gap-5 space-x-2">
                            <button className="bg-red-600 flex items-center justify-center text-white h-[4rem] gap-5 font-semibold w-[12rem] shadow-lg rounded-lg focus:outline-none">Login with <FaGoogle size={30} />
                            </button>
                            <button className="bg-gray-800 flex items-center justify-center text-white h-[4rem] gap-5 font-semibold w-[12rem] shadow-lg rounded-lg focus:outline-none">Login with <FaGithub size={30} />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col items-center bottom-3 left-[23%] absolute">
                        <Link href="#" className="text-indigo-500 text-sm" onClick={() => console.log('Forget Password clicked!')}>Forget Password ?</Link>

                        <p className="text-gray-600">Do not have an account?{' '}
                            <Link href="/signUp" className="text-indigo-500">Sign Up</Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;
