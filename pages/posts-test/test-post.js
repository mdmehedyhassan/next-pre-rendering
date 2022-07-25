import Link from 'next/link';
import React from 'react';

const TestPost = (props) => {
    return (
        <Link href={`/posts-test/${props.post?.id}`}>
            <a>
                <div style={{padding: 10, margin: 10, border: '1px solid', backgroundColor: 'lightgray'}}>
                    <h1>{props.post?.title}</h1>
                    <h4>{props.post?.body}</h4>
                </div>
            </a>
        </Link>
    );
};

export default TestPost;