import Link from "next/link";

function PostList ({posts}) {
    return (
        <div>
            <h1>Hello Post List</h1>
            {
                posts.map(post => <div 
                    style={{border: '1px solid', margin: 10, padding: 10, width: '50%'}}
                    key={post.id}>
                    <Link href={`/posts/${post.id}`} passHref>
                        <a>
                            <h4 style={{margin: 0}}>{post.title}</h4>
                            <p style={{margin: 0, textAlign: 'justify'}}>{post.body}</p>
                        </a>
                    </Link>
                </div>)
            }
        </div>
    )
}
export default PostList; 

export async function getStaticProps (){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();

    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}