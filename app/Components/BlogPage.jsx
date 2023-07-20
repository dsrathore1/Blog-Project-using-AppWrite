"use client";

import React from 'react';
import BlogPost from './BlogPost';

const BlogPage = ({ blogPosts }) => {
    return (
        <>
            <div className="flex flex-wrap">
                {
                    blogPosts && blogPosts.map((post, index) => (
                        <BlogPost
                            key={index}
                            title={post.title}
                            content={`${post.metadesc}...`}
                            slug={post.slug}
                            imageUrl={post.image}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default BlogPage