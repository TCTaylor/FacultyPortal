import "./search-box.styles.css";

function SearchBox({ onChangeHandler, placeholder }) {
  return (
    <div style={{ width: "200px" }}>
      <div
        className="input-group"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <input
          className="form-control"
          type="search"
          placeholder={placeholder}
          aria-describedby="basic-addon2"
          onChange={onChangeHandler}
        />
        <span className="input-group-text" id="basic-addon2">
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBox;
