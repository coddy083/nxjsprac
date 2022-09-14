export default function Post() {
    const List = [1, 2, 3]
    return (
        <div>
            <h1>Post List</h1>
            <li><a href="/">Home</a></li>
            {List.map((item, index) => (
                <li key={index}><a href={`/post/${item}`}>{item}</a></li>
            )
            )}
        </div>
    )
}