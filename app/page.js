"use client"

import React from "react";
import { Client, Databases } from "appwrite";

import Navbar from './Components/Navbar';
import BlogPage from "./Components/BlogPage";

//! JSON File for testing
// import Blogposts from "../data.json"; 


const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64b789dcbdf036484cfe');


export default function Home() {
  const [blogPosts, setBlogPosts] = React.useState([]);

  React.useEffect(() => {

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      '64b78a353fc1979fb144',
      '64b78a3c4f53cbae4e89',
    );

    promise.then(function (res) {
      setBlogPosts(res.documents);
    });
  });

  return (
    <>
      <Navbar />
      <BlogPage blogPosts={blogPosts} />
    </>
  )
}
