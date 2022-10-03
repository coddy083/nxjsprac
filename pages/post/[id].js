import { useRouter } from "next/router"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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
    if (id) {
      axios.get(`/api/${id}`).then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
    }
  }, [id]);

  return (
    <div>
      <li><a href="/post">Post</a></li>
      <h1>{post.name}</h1>
      <p>{post.desc}</p>
      <button
        {...(ButtonText === "Updating..." && { disabled: true })}
        onClick={ButtonCLick}>{ButtonText}</button>
    </div>
  )
}