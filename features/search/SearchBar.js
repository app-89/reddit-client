import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../app/store";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(fetchSearchResults(term));
  };
  return (
    <input
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Search Reddit..."
    />
  );
};
export default SearchBar;