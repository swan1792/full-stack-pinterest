import React, { useState } from "react";
import "./profilePage.css";
import { icons } from "../../assets/assets.js";
import Gallery from "../../components/gallery/Gallery.jsx";
import Collections from "../../components/collections/Collections.jsx";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("saved"); // default tab
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(34);

  const handleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers(followers - 1);
    } else {
      setIsFollowing(true);
      setFollowers(followers + 1);
    }
  };

  return (
    <div className="profilePage">
      {/* Avatar */}
      <div className="profile-avatar">
        <img src={icons.noAvatarIcon} alt="avatar" />
      </div>

      {/* Name & Username */}
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-username">@johnDoe12</p>
      <p className="profile-stats">{followers} followers · 0 following</p>

      {/* Action Buttons */}
      <div className="profile-actions">
        <button className="icon-btn">
          <img src={icons.shareIcon} alt="" />
        </button>
        <button className="btn">Message</button>
        <button
          className={`btn follow ${isFollowing ? "unfollow" : ""}`}
          onClick={handleFollow}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
        <button className="icon-btn">⋯</button>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <button
          className={`tab ${activeTab === "created" ? "active" : ""}`}
          onClick={() => setActiveTab("created")}
        >
          Created
        </button>
        <button
          className={`tab ${activeTab === "saved" ? "active" : ""}`}
          onClick={() => setActiveTab("saved")}
        >
          Saved
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="profile-content">
        {activeTab === "created" ? <Gallery /> : <Collections />}
      </div>
    </div>
  );
};

export default ProfilePage;
