import React from 'react';
import { getSession } from 'next-auth/react'

const Blog = ({ data }) => {
    return (
        <div>
            <h1>Blog Page: {data}</h1>
        </div>
    );
};

export default Blog;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session);
    return {
        props: {
            session,
            data: session ? "List of 100 Personalized blogs" : 'Free blog post'
        }
    }
}