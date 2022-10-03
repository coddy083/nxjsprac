import Link from "next/link"

export default function Post() {
    const List = [1, 2, 3]
    return (
        <div>
            <h1>Post List</h1>
            <li><Link href="/">Home</Link></li>
            {List.map((item, index) => (
                <li key={index}><a href={`/post/${item}`}>{item}</a></li>
            )
            )}
        </div>
    )
}