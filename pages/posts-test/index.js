import React, { useEffect, useState } from 'react';
import TestPost from './test-post';

const PostsTestList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h1>This is Test Post</h1>

            {
                posts.map(post => <TestPost key={post.id} post={post} />)
            }
        </div>
    );
};

export default PostsTestList;