// SortSelect.js
function SortSelect({ onSortChange }) {
  if (typeof onSortChange !== "function") {
    console.error("onSortChange prop is missing or is not a function");
    return null;
  }
  return (
    <div>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">선택하세요</option>
        <option value="likes">좋아요 순</option>
        <option value="date">날짜 순</option>
        <option value="messages">메시지 순</option>
      </select>
    </div>
  );
}

export default SortSelect;
