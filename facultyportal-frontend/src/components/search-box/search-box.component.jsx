import "./search-box.styles.css";

function SearchBox({ onChangeHandler, placeholder }) {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBox;
