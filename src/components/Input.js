import React from "react";
//css를 분리하여 적용하기 위해서 해당 css파일을 다음과 같이 import 했음
import styles from "./Input.module.css";

const Input = ({
  name, // 사용자의 이름
  handleNameChange, // 사용자 이름 변경 핸들러 함수
  selectedImageIndexes, // 선택된 이미지 인덱스 배열
  images, // 이미지 배열
  handleImageClick, // 이미지 클릭 핸들러 함수
  handleSave, // 저장하기 버튼 클릭 핸들러 함수
  renderSavedData, // 저장된 데이터를 렌더링하는 함수
  handleShowResult, // 결과보기 버튼 클릭 핸들러 함수
}) => {
  return (
    // Input 컴포넌트의 주요 컨테이너
    <div className={styles.content}>
      {/* MBTI Check 제목 */}
      <div className={styles["mbti-check-heading"]}>MBTI Check</div>
      {/* 컨텐츠를 담는 컨테이너 */}
      <div className={styles["content-container"]}>
        {/* 사용자 입력을 위한 왼쪽 컨테이너 */}
        <div className={styles["mbti-check-left-container"]}>
          <div className={styles["left-content"]}>
            {/* 사용자 이름을 입력하는 입력 필드 */}
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
            {/* 사용자가 선택할 이미지들을 나열한 그리드 */}
            <div className={styles["image-grid"]}>
              {/* 'images' 배열을 매핑하여 이미지들을 표시 */}
              {images.map((image, imageIndex) => (
                <div key={imageIndex} className={styles["image-row"]}>
                  {/* 이미지를 표시하고 선택된 경우 'selected' 스타일을 적용 */}
                  <img
                    src={image}
                    alt=""
                    className={
                      selectedImageIndexes[Math.floor(imageIndex / 2)] ===
                      imageIndex
                        ? styles.selected
                        : ""
                    }
                    // 이미지를 클릭하면 적절한 인덱스와 함께 'handleImageClick' 함수 호출
                    onClick={() =>
                      handleImageClick(Math.floor(imageIndex / 2), imageIndex)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          {/* 사용자 데이터를 저장하는 버튼 */}
          <button onClick={handleSave}>저장하기</button>
        </div>
        {/* 저장된 데이터를 표시하고 결과를 보여주는 오른쪽 컨테이너 */}
        <div className={styles["right-container"]}>
          <div className={styles["right-content"]}>
            {/* 데이터 저장 성공 메시지 */}
            <div className={styles["success-message"]}>Success</div>
            {/* 'renderSavedData' 함수를 사용하여 저장된 데이터 표시 */}
            <div className={styles["saved-data"]}>{renderSavedData()}</div>
          </div>
          {/* 결과를 보여주는 버튼 */}
          <button className={styles["result-btn"]} onClick={handleShowResult}>
            결과보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
