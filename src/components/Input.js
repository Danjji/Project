import React from "react";
import styles from "./Input.module.css";

const Input = ({
  name,
  handleNameChange,
  selectedImageIndexes,
  images,
  handleImageClick,
  handleSave,
  renderSavedData,
  handleShowResult,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles["mbti-check-heading"]}>MBTI Check</div>

      <div className={styles["content-container"]}>
        <div className={styles["mbti-check-left-container"]}>
          <div className={styles["left-content"]}>
            <label id="nameLabel" htmlFor="name">
              이름:{" "}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="이름을 입력하세요"
            />
            <div className={styles["image-grid"]}>
              {images.map((image, imageIndex) => (
                <div key={imageIndex} className={styles["image-row"]}>
                  <img
                    src={image}
                    alt=""
                    className={
                      selectedImageIndexes[Math.floor(imageIndex / 2)] ===
                      imageIndex
                        ? styles.selected
                        : ""
                    }
                    onClick={() =>
                      handleImageClick(Math.floor(imageIndex / 2), imageIndex)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleSave}>저장하기</button>
        </div>
        <div className={styles["right-container"]}>
          <div className={styles["right-content"]}>
            <div className={styles["success-message"]}>Success</div>
            <div className={styles["saved-data"]}>{renderSavedData()}</div>
          </div>
          <button className={styles["result-btn"]} onClick={handleShowResult}>
            결과보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
