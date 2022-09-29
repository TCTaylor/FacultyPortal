import "./search-box.styles.css";

function SearchBox({ onChangeHandler }) {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search courses"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBox;
