// SearchResults.js
import Card from "./card/Card";
import SortSelect from "./SortSelect";
import styles from "./card/DebateCard.module.css";

function SearchResults({ results, onSortChange }) {
  return (
    <div>
      <h2>검색 결과</h2>
      <SortSelect onSortChange={onSortChange} />
      <div className={styles.cardRow}>
        {results.map((debate) => (
          <Card key={debate.id} debate={debate} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
