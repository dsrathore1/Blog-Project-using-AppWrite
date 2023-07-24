import { account, uid } from '@/appwrite/config';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        //* Main Logic
        try {
            await account.create(
                uid, //! This will generate UNIQUE_ID each time
                userDetails.email, //! User's Email_ID
                userDetails.password, //! User's Password
                userDetails.username //! This will set the username and this optional in create function
            );

            //* After submit the form 
            setUserDetails({
                username: "",
                email: '',
                password: ""
            });
            router.push("/"); //* It will push to the home page

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex h-full items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
                <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={userDetails.username}
                            type="text"
                            onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}
                            placeholder="Enter your username"
                            name='username'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={userDetails.email}
                            onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={userDetails.password}
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
