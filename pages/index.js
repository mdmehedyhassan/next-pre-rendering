import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Hello World!!</h1>
      <Link href="/users">Users</Link>
      <br />
      <Link href="/posts">Posts</Link>
    </div>
  )
}
