import React from "react";
import "./postPage.css";
import { Link } from "react-router-dom";
import { icons } from "../../assets/assets.js";
import PinImage from "../../components/image/PinImage";
import Comment from "../../components/comment/Comment";
import PostInteraction from "../../components/postInteraction/postInteraction";

const PostPage = () => {
  return (
    <div className="postPage">
      <div className="postContainer">
        <div className="backIcon">
          <Link to={"/"}>
            <img src={icons.backIcon} alt="" />
          </Link>
        </div>
        <div className="postImage">
          <PinImage
            src="https://ik.imagekit.io/fdiixpf5c/pins/pin1.jpeg?updatedAt=1758726724394"
            w={300}
            className="img"
          />
        </div>

        <div className="postDetails">
          <PostInteraction />
          {/* <Link to="/join" className="postUser">
            <img src={icons.noAvatarIcon} alt="" />
            <span>John Doe</span>
          </Link> */}
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
