import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/nav_bar/NavBar";
import styles from "./DibateList.module.css";

const DibateList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchKeyword.trim() !== "") {
      axios.get(`/search?keyword=${searchKeyword}`).then((response) => {
        setSearchResults(response.data);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword]);

  return (
    <div className={styles.listContainer}>
      <NavBar />
      <h2 className={styles.mainTitle}>전체 토론 주제</h2>
      <div>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        {searchResults.length > 0 && (
          <div>
            <h2>검색 결과</h2>
            <ul className={styles.searchResults}>
              {searchResults.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <ul className={styles.postList}>
        {searchResults.length > 0 ? (
          searchResults.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <li>검색 결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default DibateList;
