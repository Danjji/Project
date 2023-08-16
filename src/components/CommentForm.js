// CommentForm.js
import React, { useState } from "react";
import styles from "./CommentForm.module.css";

const CommentForm = ({ onSubmit }) => {
  const [newComment, setNewComment] = useState("");
  const [selectedOpinion, setSelectedOpinion] = useState(null);

  const handleSubmit = () => {
    if (newComment && selectedOpinion) {
      const newCommentData = {
        userId: "tempUser", // 임시로 설정한 값입니다. 실제 사용자 ID로 변경해야 합니다.
        userImage: "https://yourDefaultUserImageUrl.com", // 사용자 이미지 URL. 필요에 따라 변경해야 합니다.
        opinion: selectedOpinion,
        comment: newComment,
        likes: 0, // 초기 좋아요 수는 0으로 설정
        date: new Date().toISOString(), // 현재 시간
      };
      onSubmit(newCommentData);
      setNewComment("");
    }
  };

  return (
    <div className={styles.inputContainer}>
      <button
        className={`${styles.opinionButton} ${
          selectedOpinion === "A" ? styles.selectedA : ""
        }`}
        onClick={() => setSelectedOpinion("A")}
      >
        A
      </button>
      <button
        className={`${styles.opinionButton} ${
          selectedOpinion === "B" ? styles.selectedB : ""
        }`}
        onClick={() => setSelectedOpinion("B")}
      >
        B
      </button>
      <input
        className={styles.commentInput}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
      />
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CommentForm;
