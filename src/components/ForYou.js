import { useState } from "react";
import "../style/foryou.css";

const ForYouHeader = () => {
  return (
    <header className="for-you-header">
      <h1>ampost</h1>
    </header>
  );
};

const PostCont = ({ post }) => {
  return (
    <div className="post-cont">
      <div></div>
      <section>
        <p>{post.content}</p>
      </section>
    </div>
  );
};

const ForYou = () => {
  const [posts, setPosts] = useState([
    {
      name: "joe",
      userId: 56789,
      content:
        "hdkhsadhakb kaskdaksdka i thank God, iuaisdiadisabdibsdaidbiasb",
    },
    {
      name: "joe",
      userId: 56789,
      content:
        "hdkhsadhakb kaskdaksdka i thank God, iuaisdiadisabdibsdaidbiasb",
    },
    {
      name: "joe",
      userId: 56789,
      content:
        "hdkhsadhakb kaskdaksdka i thank God, iuaisdiadisabdibsdaidbiasb",
    },
    {
      name: "joe",
      userId: 56789,
      content:
        "hdkhsadhakb kaskdaksdka i thank God, iuaisdiadisabdibsdaidbiasb",
    },
  ]);
  return (
    <div className="foryou-sec">
      <ForYouHeader />
      {posts.map((post) => (
        <PostCont post={post} />
      ))}
    </div>
  );
};

export default ForYou;
