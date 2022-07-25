import React, { useEffect, useState } from "react";
import {useRouter} from "next/router"

const TestPost = () => {
    const [post, setPost] = useState({});
    // const [reload, setReload] = useState(false);
    const router = useRouter();
    const testPostId = router.query?.['test-post'];
    
    useEffect(()=> {
        if(testPostId){
          fetch(`https://jsonplaceholder.typicode.com/posts/${testPostId}`)
          .then(res => res.json())
          .then(data => {
              setPost(data)
          })
        }
    },[testPostId])

  return (
    <div
      style={{
        padding: 10,
        margin: 10,
        border: "1px solid",
        backgroundColor: "lightgray",
      }}
    >
      <h1>{post?.id} {post?.title}</h1>
      <h4>{post?.body}</h4>
    </div>
  );
};

export default TestPost;
