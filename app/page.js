"use client"

import React from "react";
import { promise_listDocuments } from "@/appwrite/config";

import Navbar from './Components/Navbar';
import BlogPage from "./Components/BlogPage";
import Footer from "./Components/Footer";

//! JSON File for testing
// import Blogposts from "../data.json"; 

export default function Home() {
  const [blogPosts, setBlogPosts] = React.useState();

  React.useEffect(() => {
    promise_listDocuments.then(function (res) {
      setBlogPosts(res.documents); // Set the data into the state
    });


  }, []);
  {
    return (
      <>
        <Navbar />
        <BlogPage blogPosts={blogPosts} />
        <Footer />
      </>
    )
  }
}
