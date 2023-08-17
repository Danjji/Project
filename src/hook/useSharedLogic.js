// useSharedLogic.js
import { useState } from "react";
import axios from "axios";
import I from "../assets/I.png";
import E from "../assets/E.png";
import S from "../assets/S.png";
import N from "../assets/N.png";
import F from "../assets/F.png";
import T from "../assets/T.png";
import P from "../assets/P.png";
import J from "../assets/J.png";
import { mbtiToAlphabet } from "../utils/compatibility";
import "./useSharedLogic.css";

const useSharedLogic = (satellites) => {
  const [name, setName] = useState("");
  const [selectedImageIndexes, setSelectedImageIndexes] = useState([
    -1, -1, -1, -1,
  ]);
  const [showContent, setShowContent] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [savedData, setSavedData] = useState([]);

  const images = [I, E, S, N, F, T, P, J];

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageClick = (rowIndex, imageIndex) => {
    const imageGroups = [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
    ];

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

  const handleStart = () => {
    setShowContent(true);
  };

  const handleSave = () => {
    if (name.trim() === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (selectedImageIndexes.includes(-1)) {
      alert("올바른 MBTI 타입을 선택해주세요.");
      return;
    }

    const mbtiType = mbtiToAlphabet(selectedImageIndexes);

    const newData = {
      name: name,
      mbti: selectedImageIndexes,
      mbtiType: mbtiType,
    };
    setSavedData([...savedData, newData]);
    setName("");
    setSelectedImageIndexes([-1, -1, -1, -1]);
  };

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
    }, 3000);
  };

  const areAllImagesLoaded = () => {
    return imagesLoaded === satellites.length;
  };

  const renderSelectedImages = () => {
    return selectedImageIndexes.map((imageIndex, rowIndex) => (
      <div key={rowIndex} className="result-images">
        {imageIndex !== -1 && (
          <img src={images[imageIndex]} alt="" className="result-image" />
        )}
      </div>
    ));
  };

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);

    if (imagesLoaded + 1 === satellites.length) {
      setAllImagesLoaded(true);
    }
  };

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
    areAllImagesLoaded,
    allImagesLoaded,
    handleImageLoad,
  };
};

export default useSharedLogic;
