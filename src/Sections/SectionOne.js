// SectionOne.js
import React from "react";
import logoImage from "../images/logo.png"; // 로고 이미지 파일 임포트
import "./SectionOne.css"; // SectionOne 컴포넌트에 적용할 CSS 스타일 임포트

const SectionOne = ({ handleScrollToSectionTwo }) => {
  return (
    // SectionOne 컴포넌트의 주요 컨테이너
    <div className="section-one">
      {/* 로고 이미지 */}
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      {/* 배너 영역 */}
      <div className="banner">
        {/* 배너 이미지 */}
        <img src={logoImage} alt="Banner" />
        <p className="banner-title">WE-checking</p> {/* 배너 제목 */}
        <p className="banner-info">
          내가 속한 그룹 또는 상대방과의 케미를 확인해보세요
        </p>{" "}
        {/* 배너 설명 */}
        <button onClick={handleScrollToSectionTwo}>확인하기</button>
        {/* "확인하기" 버튼, 'handleScrollToSectionTwo' 함수 실행 */}
      </div>
    </div>
  );
};

export default SectionOne;
