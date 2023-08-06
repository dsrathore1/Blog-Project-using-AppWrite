"use client"

import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const UserProfile = () => {
    const router = useRouter();
    const [getDetails, setGetDetails] = React.useState({
        username: "",
        email: "",
    });

    return (
        <div className="bg-slate-200 min-h-screen w-screen flex items-center justify-center" >
            <div className="bg-white shadow-xl rounded-lg p-8 h-[65vh] flex flex-col justify-between items-start w-[35vw]">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center text-black"><BiArrowBack onClick={() => { router.back() }} className='hover:-translate-x-2 transition-all duration-[.3s] cursor-pointer ' /> <span className='ml-3 text-indigo-500'>User Pr </span>ofile</h2>
                <div className="mb-6 flex flex-col items-start justify-center gap-3">
                    <h3 className="text-3xl text-indigo-600 mb-4 font-bold">{getDetails.name}</h3>
                    <p className='text-black font-bold text-xl'>Email: <span className='text-grey-300 text-lg font-normal'>{getDetails.email}</span></p>
                    <p className='text-black font-bold text-xl'>Email Verified: <span className='text-grey-300 text-lg font-normal'>{getDetails.emailVerification ? 'Yes' : 'No'}</span></p>
                    <p className='text-black font-bold text-xl'>Register on: <span className='text-grey-300 text-lg font-normal'>{new Date(getDetails.registration).toLocaleString()}</span></p>
                    <p className='text-black font-bold text-xl'>Password Update on: <span className='text-grey-300 text-lg font-normal'>{new Date(getDetails.passwordUpdate).toLocaleString()}</span></p>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300"
                        onClick={handleDeleteAccount}
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div >
    );
}


export default UserProfile;
