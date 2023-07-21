"use client";

import React from 'react';
import BlogPost from './BlogPost';

const BlogPage = ({ blogPosts }) => {
    return (
        <>
            <div className="flex flex-wrap">
                {
                    blogPosts && blogPosts.map((post) => {
                        return (
                            <BlogPost
                                key={post.$id}
                                title={post.title}
                                content={post.metadesc}
                                imageUrl={post.image}
                                slug={post.slug}
                                id={post.$id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default BlogPage