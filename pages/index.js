import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <li><Link href="/post">Post</Link></li>
    </div>
  )
}