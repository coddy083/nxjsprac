import { useRouter } from "next/router"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function PostDetail() {
  // const router = useRouter();
  // const number = router.query.id;
  // const [PostDesc, setPostDesc] = useState('');

  console.log("랜더 몇번?");

  // useEffect(() => {
  //   axios.get(`/api/${number}`)
  //     .then((res) => {
  //       console.log("wooo?");
  //       setPostDesc(res.data.desc);
  //     }
  //     )
  // }, [number]);

  return (
    <div>
      <li><a href="/post">Post</a></li>
      {/* <h1>Subject : {number}</h1> */}
      {/* <p>{PostDesc}</p> */}
    </div>
  )
}