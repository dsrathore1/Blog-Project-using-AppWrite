"use client"

import React from "react";
import { account, promise_listDocuments } from "@/appwrite/config";

import Navbar from './Components/Navbar';
import BlogPage from "./Components/BlogPage";
import Footer from "./Components/Footer";

//! JSON File for testing
// import Blogposts from "../data.json"; 

export default function Home() {
  const [blogPosts, setBlogPosts] = React.useState();
  const userDetail = account.get();

  React.useEffect(() => {
    promise_listDocuments.then(function (res) {
      setBlogPosts(res.documents); // Set the data into the state
    });


  }, []);

  userDetail.then(function (res) {
    console.log(res);
  });

  if (userDetail) {
    return (
      <>
        <Navbar />
        <BlogPage blogPosts={blogPosts} />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <h1 className="text-white">Login First</h1>
      </>
    )
  }
}
