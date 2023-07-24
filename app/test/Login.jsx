import { account } from '@/appwrite/config';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

    const [error, setError] = useState(false);

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        //* Main Logic
        try {
            await account.createEmailSession(
                userDetails.email, //! Get User's Email_ID
                userDetails.password, //! Get User's Password
            );
            router.push("/");
            setError(error);
        } catch (error) {
            setError(true);
        }


        //* After submit the form 
        setUserDetails({
            email: "",
            password: ""
        });
    }

    return (
        <>
            <div className="flex h-full items-center justify-center my-8">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
                    <h1 className="text-3xl font-semibold mb-6">Login</h1>
                    <form onSubmit={handleSubmit}>
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
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {
                error ? <h1 className='text-white text-4xl'>Error found please try again</h1> : <></>
            }
        </>
    );
};

export default LoginPage;
