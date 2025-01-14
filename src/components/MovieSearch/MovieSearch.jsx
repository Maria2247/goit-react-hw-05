import { useEffect, useState } from "react";
import css from "./MovieSearch.module.css";

export default function MovieSearch({ value, onSearch, onClear }) {
  const [inputValue, setInputValue] = useState(value);
  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleSearch = (evt) => {
    evt.preventDefault();

    if (inputValue.trim() === "") {
      alert("Please enter a movie name!");
      return;
    }
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onClear();
  };

  return (
    <form onSubmit={handleSearch} className={css.form}>
      <input
        type="text"
        name="query"
        onChange={handleInputChange}
        value={inputValue}
        className={css.input}
      />
      <button className={css.btn}>Search</button>
      <button type="button" onClick={handleClear} className={css.btn}>
        Clear
      </button>
    </form>
  );
}
