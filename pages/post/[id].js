import { useRouter } from "next/router"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({
    id: "",
    name: "",
    desc: "",
  });
  const [ButtonText, setButtonText] = useState("Update");

  const ButtonCLick = () => {
    setButtonText("Updating...");
    setTimeout(() => {
      setButtonText("Complete");
    }, 1000);
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      axios.get(`/api/${id}`).then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
    }
  }, [id]);

  return (
    <div>
      <Link href="/post">Post</Link>
      <h1>{post.name}</h1>
      <p>{post.desc}</p>
      <button
        {...(ButtonText === "Updating..." && { disabled: true })}
        onClick={ButtonCLick}>{ButtonText}</button>
    </div>
  )
}