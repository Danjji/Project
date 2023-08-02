// useSharedLogic.js
import { useState } from "react";
import I from "../images/I.png";
import E from "../images/E.png";
import S from "../images/S.png";
import N from "../images/N.png";
import F from "../images/F.png";
import T from "../images/T.png";
import P from "../images/P.png";
import J from "../images/J.png";
import { mbtiToAlphabet } from "../utils/compatibility";
import "./useSharedLogic.css";

// useSharedLogic 커스텀 훅 선언
/* 해당 함수들은 여러 컴포넌트에서 사용이 될수 있으므로 코드 중복을 피하기 위해 따로 작성했음 */
const useSharedLogic = () => {
  // 상태 변수들 정의
  const [name, setName] = useState("");
  const [selectedImageIndexes, setSelectedImageIndexes] = useState([
    -1, -1, -1, -1,
  ]);
  const [showContent, setShowContent] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [savedData, setSavedData] = useState([]);

  // MBTI 이미지 파일들을 배열로 정의
  const images = [I, E, S, N, F, T, P, J];

  // 유저 이름 입력 변경 핸들러 함수
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // MBTI 이미지 클릭 핸들러 함수
  const handleImageClick = (rowIndex, imageIndex) => {
    // 이미지 그룹 정의
    const imageGroups = [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
    ];

    // 선택된 이미지 인덱스 업데이트
    const updatedSelectedImageIndexes = [...selectedImageIndexes];

    imageGroups[rowIndex].forEach((i) => {
      if (i !== imageIndex && updatedSelectedImageIndexes.includes(i)) {
        const index = updatedSelectedImageIndexes.indexOf(i);
        if (index > -1) {
          updatedSelectedImageIndexes[index] = -1;
        }
      }
    });

    updatedSelectedImageIndexes[rowIndex] = imageIndex;
    setSelectedImageIndexes(updatedSelectedImageIndexes);
  };

  // "시작하기" 버튼 클릭 핸들러 함수
  const handleStart = () => {
    setShowContent(true);
  };

  // "저장하기" 버튼 클릭 핸들러 함수
  const handleSave = () => {
    if (name.trim() === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (selectedImageIndexes.includes(-1)) {
      alert("올바른 MBTI 타입을 선택해주세요.");
      return;
    }

    // MBTI 알파벳으로 변환
    const mbtiType = mbtiToAlphabet(selectedImageIndexes);

    // 새로운 데이터 객체 생성 및 저장
    const newData = {
      name: name,
      mbti: selectedImageIndexes,
      mbtiType: mbtiType,
    };
    setSavedData([...savedData, newData]);
    setName("");
    setSelectedImageIndexes([-1, -1, -1, -1]);
  };

  // "결과보기" 버튼 클릭 핸들러 함수
  const handleShowResult = () => {
    if (savedData.length === 0) {
      alert("MBTI 타입을 입력해주세요.");
      return;
    } else if (savedData.length === 1) {
      alert("2명 이상의 정보를 입력해주세요");
      return;
    }

    setShowLoading(true);
    setTimeout(() => {
      setShowResult(true);
      setShowLoading(false);
    }, 5000);
  };

  // 선택된 이미지들을 렌더링하는 함수
  const renderSelectedImages = () => {
    return selectedImageIndexes.map((imageIndex, rowIndex) => (
      <div key={rowIndex} className="result-images">
        {imageIndex !== -1 && (
          <img src={images[imageIndex]} alt="" className="result-image" />
        )}
      </div>
    ));
  };

  // 저장된 데이터들을 렌더링하는 함수
  const renderSavedData = () => {
    const rows = [];
    for (let i = 0; i < savedData.length; i += 2) {
      const rowData = savedData.slice(i, i + 2);
      rows.push(
        <div key={i} className="data-row">
          {rowData.map((data, index) => (
            <div key={index} className="saved-data">
              <p>이름: {data.name}</p>
              <div className="result-images">
                {data.mbti.map((imageIndex, rowIndex) => (
                  <div key={rowIndex} className="result-images">
                    {imageIndex !== -1 && (
                      <img
                        src={images[imageIndex]}
                        alt=""
                        className="result-image"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  // 커스텀 훅스에서 사용하는 상태와 함수들을 반환
  return {
    name,
    setName,
    selectedImageIndexes,
    setSelectedImageIndexes,
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
  };
};

export default useSharedLogic;
