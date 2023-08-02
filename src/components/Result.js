import React, { useState } from "react";
import { checkCompatibility, mbtiToAlphabet } from "../utils/compatibility";
import styles from "./Result.module.css";

const Result = ({ savedData, images }) => {
  // 모달 상태를 관리하는 상태 변수들
  const [showModal, setShowModal] = useState(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [sharedLink, setSharedLink] = useState("");

  // 선택된 사용자 인덱스를 관리하는 상태 변수
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);

  // 사용자 데이터를 렌더링하는 함수
  const renderUserData = () => {
    if (!savedData || savedData.length === 0) {
      return <p>데이터가 없습니다.</p>;
    }

    return (
      <div className={styles.userData}>
        {savedData.map((user, index) => (
          <div
            key={index}
            className={`${styles.user} ${
              index === selectedUserIndex ? styles.selected : ""
            }`}
            onClick={() => setSelectedUserIndex(index)}
          >
            <div className={styles.userContainer}>
              <p className={styles.userName}>{user.name}님</p>
              <div className={styles.userImages}>
                {renderSelectedImages(user.mbti, index)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 사용자의 궁합 결과를 렌더링하는 함수
  const renderCompatibilityResult = () => {
    if (!savedData || savedData.length < 2) {
      return <p>데이터가 충분하지 않습니다.</p>;
    }

    const selectedUserData = savedData[selectedUserIndex];
    const mbti1 = mbtiToAlphabet(selectedUserData.mbti);
    const name1 = selectedUserData.name;

    return (
      <div className={styles.savedDataContainer}>
        {savedData.map((user, index) => {
          if (index !== selectedUserIndex) {
            const mbti2 = mbtiToAlphabet(user.mbti);
            const name2 = user.name;
            const result = checkCompatibility(mbti1, mbti2);

            return (
              <div
                key={`${name1}-${name2}`}
                className={`${styles.compatibilityResult} ${styles.fadeInOut} ${
                  index === selectedUserIndex ? styles.selected : ""
                }`}
              >
                <p>
                  {name1}님({mbti1})과 {name2}님({mbti2}) 의 궁합 결과: {result}
                </p>
              </div>
            );
          }

          return null;
        })}
      </div>
    );
  };

  // 선택된 이미지를 렌더링하는 함수
  const renderSelectedImages = (mbti, userIndex) => {
    return mbti.map((imageIndex, rowIndex) => (
      <div key={rowIndex} className={styles.resultImages}>
        {imageIndex !== -1 && (
          <img
            src={images[imageIndex]}
            alt=""
            className={`${styles.resultImage} ${
              userIndex === selectedUserIndex ? styles.selected : ""
            }`}
            onClick={() => setSelectedUserIndex(userIndex)}
          />
        )}
      </div>
    ));
  };

  // 링크 공유 버튼 클릭 시 실행되는 함수
  const handleShareLink = () => {
    // 예시로 'https://example.com/share?data=...' 와 같은 형태로 링크를 생성
    // setSharedLink 함수를 사용하여 링크를 상태로 저장
    const sharedData = savedData[selectedUserIndex];
    const link = `https://example.com/share?data=${encodeURIComponent(
      JSON.stringify(sharedData)
    )}`;
    setSharedLink(link);

    // 모달 창을 띄우도록 상태를 변경
    setShowModal(true);
  };

  // 링크를 클립보드에 복사하는 함수
  const handleCopyLink = () => {
    // Copy the link to the clipboard
    navigator.clipboard.writeText(sharedLink);
    setIsLinkModalOpen(false);
  };

  return (
    <div className={styles.content}>
      {/* 왼쪽 컨텐츠 */}
      <div className={styles.leftContent}>
        <h2>Members</h2>
        {renderUserData()}
      </div>
      {/* 오른쪽 컨텐츠 */}
      <div className={styles.rightContent}>
        <h2>결과 화면</h2>
        <div className={styles.savedDataContainer}>
          {renderCompatibilityResult()}
        </div>
        {/* "링크 공유" 버튼 추가 */}
        <button className={styles.shareButton} onClick={handleShareLink}>
          링크 공유
        </button>
      </div>
      {/* 링크 공유 모달 */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>링크 공유</h3>
            <input
              type="text"
              value={sharedLink}
              readOnly
              onClick={(e) => e.target.select()}
            />
            <div className={styles.buttons}>
              <button onClick={() => setShowModal(false)}>취소</button>
              <button onClick={handleCopyLink}>복사</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
