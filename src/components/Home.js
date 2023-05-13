import { useState } from "react";
import "../style/home.css";

//componets
import ForYou from "./ForYou";

const Actionsec = ({ toggleAddPost }) => {
  return (
    <div className="action-sec">
      <div>
        <ul>
          <li>Profile</li>
          <li>Home</li>
          <li>Profile</li>
          <li>Home</li>
          <li>Profile</li>
        </ul>

        <span onClick={toggleAddPost}>Add Post</span>
      </div>
      <section></section>
    </div>
  );
};

const ThirdSec = () => {
  return <div className="third-sec"></div>;
};

function AddPost() {
  const [post, setPost] = useState("");

  function addPostText() {
    console.log(post);
  }

  return (
    <div className="add-post-sec">
      <div>
        <textarea onChange={(e) => setPost(e.target.value)} />
      </div>
      <section>
        <button onClick={addPostText}>Add Post</button>
      </section>
    </div>
  );
}

const Home = () => {
  const [toggleAddPost, setToggleAddPost] = useState(false);
  return (
    <div className="home">
      <Actionsec toggleAddPost={(e) => setToggleAddPost(!toggleAddPost)} />
      <ForYou />
      <ThirdSec />
      {toggleAddPost && <AddPost />}
    </div>
  );
};

export default Home;
/*
git remote add origin https://github.com/ChrisMadeda-Dev/ampost.git
git branch -M main
git push -u origin main
*/