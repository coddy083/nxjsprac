import { useRouter } from "next/router"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function PostDetail() {
  const router = useRouter();
  const number = router.query.id;
  const [PostDesc, setPostDesc] = useState('');
  const [Postsub, setPostsub] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/${number}`)
      .then((res) => {
        setPostDesc(res.data.desc);
        setPostsub(res.data.name);
      }
      )
  }, [number]);

  return (
    <div>
      <li><a href="/post">Post</a></li>
      <h1>{Postsub}</h1>
      <p>{PostDesc}</p>
    </div>
  )
}