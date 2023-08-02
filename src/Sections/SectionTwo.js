// SectionTwo.js
import React from "react";
import useSharedLogic from "../hook/useSharedLogic"; // useSharedLogic 커스텀 훅스 임포트
import Start from "../components/Start"; // Start 컴포넌트 임포트
import Input from "../components/Input"; // Input 컴포넌트 임포트
import Result from "../components/Result"; // Result 컴포넌트 임포트
import styles from "./SectionTwo.module.css"; // SectionTwo 컴포넌트에 적용할 CSS 스타일 임포트
import Loading from "../components/Loading"; // Loading 페이지 컴포넌트

const SectionTwo = ({ handleScrollToSectionTwo }) => {
  // useSharedLogic 커스텀 훅스를 사용하여 상태와 함수들을 가져옴
  const {
    name,
    selectedImageIndexes,
    showContent,
    setShowContent,
    showResult,
    setShowResult,
    showLoading,
    setShowLoading,
    savedData,
    setSavedData,
    images,
    handleNameChange,
    handleImageClick,
    handleStart,
    handleSave,
    handleShowResult,
    renderSelectedImages,
    renderSavedData,
  } = useSharedLogic();
  return (
    <div className={styles.sectionTwo}>
      {showLoading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : !showContent && !showResult ? (
        <Start handleStart={handleStart} />
      ) : showContent && !showResult ? (
        <Input
          name={name}
          handleNameChange={handleNameChange}
          selectedImageIndexes={selectedImageIndexes}
          images={images}
          handleImageClick={handleImageClick}
          handleSave={handleSave}
          renderSavedData={renderSavedData}
          handleShowResult={handleShowResult}
        />
      ) : showContent && showResult ? (
        <Result savedData={savedData} images={images} />
      ) : null}
    </div>
  );
};

export default SectionTwo;
