import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import EmojiPicker from "emoji-picker-react";
import { icons } from "../../assets/assets.js";
import "./comment.css";

export default function Comment({ onSubmit }) {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const textareaRef = useRef(null);
  const emojiButtonRef = useRef(null);
  const pickerRef = useRef(null);

  // Submit comment
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    if (onSubmit) onSubmit(text.trim());
    setText(""); // Clear textarea

    // Keep picker open after submit
    // setShowPicker(false); // uncomment to close after submit
  }

  // Insert emoji at cursor
  function handleEmojiClick(emojiData) {
    const cursorPos = textareaRef.current.selectionStart;
    const newText =
      text.slice(0, cursorPos) + emojiData.emoji + text.slice(cursorPos);
    setText(newText);

    setTimeout(() => {
      textareaRef.current.focus();
      textareaRef.current.selectionStart = cursorPos + emojiData.emoji.length;
      textareaRef.current.selectionEnd = cursorPos + emojiData.emoji.length;
    }, 0);
  }

  // Close picker when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(e.target) &&
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(e.target)
      ) {
        setShowPicker(false);
      }
    }
    if (showPicker) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPicker]);

  // Position emoji picker dynamically
  const getPickerStyle = () => {
    if (!emojiButtonRef.current) return { top: 0, left: 0 };

    const rect = emojiButtonRef.current.getBoundingClientRect();
    const pickerHeight = 350;
    const pickerWidth = 300;
    const margin = 10;

    // vertical position
    let top = rect.top - pickerHeight + window.scrollY; // default above
    if (top < margin) top = rect.bottom + margin + window.scrollY; // place below if not enough space

    // horizontal position
    let left = rect.left + rect.width / 2 + window.scrollX;
    if (left + pickerWidth / 2 > window.innerWidth - margin)
      left = window.innerWidth - pickerWidth / 2 - margin;
    if (left - pickerWidth / 2 < margin) left = pickerWidth / 2 + margin;

    return { position: "absolute", top, left, transform: "translateX(-50%)", zIndex: 1000 };
  };

  return (
    <div className="comment">
      {/* Comments */}
      <div className="user-comment">
        <p style={{ color: "darkcyan" }}>5 comments</p>
        {[...Array(5)].map((_, i) => (
          <div className="user-img-comment" key={i}>
            <img src={icons.noAvatarIcon} alt="" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              corporis alias illum ab officiis libero quam laudantium dicta quas
              hic, soluta nihil ducimus explicabo voluptates, officia facilis
              consequatur voluptas fuga.
            </span>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          rows={1}
          className="comment-textarea"
        />

        <div
          className="emoji"
          ref={emojiButtonRef}
          onClick={() => setShowPicker((prev) => !prev)}
        >
          <img src={icons.emojiIcon} alt="emoji" />
        </div>

        <button
          type="submit"
          disabled={!text.trim()}
          className="comment-button"
        >
          Post
        </button>
      </form>

      {/* Emoji Picker Portal */}
      {showPicker &&
        createPortal(
          <div className="emoji-picker" ref={pickerRef} style={getPickerStyle()}>
            <div className="emoji-close-button" onClick={() => setShowPicker(false)}>
              ✕
            </div>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>,
          document.body
        )}
    </div>
  );
}
