import React from "react";
import "./createPage.css";
import {icons} from "../../assets/assets.js"

export default function CreatePage() {
  return (
    <div className="create-pin">
      {/* Left side - File upload */}
      <div className="upload-box">
        <div className="upload-placeholder">
          <span className="upload-icon"><img src={icons.uploadIcon} alt="" /></span>
          <p>Choose a file or drag and drop it here</p>
          <small>
            We recommend using high-quality .jpg files less than 20 MB or .mp4
            files less than 200 MB.
          </small>
        </div>
        <button className="upload-url">Save from URL</button>
      </div>

      {/* Right side - Form */}
      <div className="form-box">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Add a title" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Add a detailed description"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input id="link" type="text" placeholder="Add a link" />
        </div>

        <div className="form-group">
          <label htmlFor="board">Board</label>
          <select id="board">
            <option>Choose a board</option>
            {/* map boards here if dynamic */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tagged topics (0)</label>
          <input id="tags" type="text" placeholder="Search for a tag" />
        </div>

        <div className="form-group more-options">
          <button className="more-options-btn">More options ⌄</button>
        </div>
      </div>
    </div>
  );
}
