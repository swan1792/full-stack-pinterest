import React from "react";
import "./postInteraction.css";
import { icons } from "../../assets/assets.js";
import { Link } from "react-router-dom";

const PostInteraction = () => {
  return (
    <div className="postInteractions">
      <div className="postInteractionscontainer">
        <img src={icons.reactIcon} alt="" />
        <img src={icons.commentIcon} alt="" />
        <img src={icons.shareIcon} alt="" />
        <img src={icons.moreIcon} alt="" />
      </div>

      <div className="corner-profile-save">
        <Link to="/join" className="postUser">
          <img src={icons.noAvatarIcon} alt="" />
          <span>John Doe</span>
        </Link>
        <button>Save</button>
      </div>
    </div>
  );
};

export default PostInteraction;
