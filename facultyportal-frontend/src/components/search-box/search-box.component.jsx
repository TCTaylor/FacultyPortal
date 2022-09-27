import './search-box.styles.css';

function SearchBox({ className, placeholder, onChangeHandler }) {
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
}

export default SearchBox;