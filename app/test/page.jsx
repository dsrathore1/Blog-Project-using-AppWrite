"use client"

import React from 'react';
import CreateDocument from './CreateDocument';
import Navbar from '../Components/Navbar';
import SignupPage from './SignUpPage';
import LoginPage from './Login';
import UserProfile from '../userProfile/page';

const MainTest = () => {

    return (
        <>
            <Navbar />
            <CreateDocument />
            <SignupPage />
            <LoginPage />
            <UserProfile />
        </>
    )
}

export default MainTest;