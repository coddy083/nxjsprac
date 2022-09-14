import { useRouter } from "next/router"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function PostDetail() {
  const router = useRouter();
  const {id} = router.query;
  const [title , setTitle] = useState("");
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/${id}`).then((res) => {
        console.log(res.data);
        setTitle(res.data.name);
        setPost(res.data.desc);
      });
    }
  }, [id]);

  return (
    <div>
      <li><a href="/post">Post</a></li>
      <h1>{title}</h1>
      <p>{post}</p>
    </div>
  )
}