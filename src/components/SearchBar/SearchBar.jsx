import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

export default function SearchBar({ handleChange, filter }) {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        placeholder="Search for a country"
        value={filter}
        onChange={(e) => handleChange(e)}
      />
      <div className="search-bar__icon">
        <BsSearch />
      </div>
    </div>
  );
}
