import SearchBar from "../SearchBar/SearchBar";
import Select from "../Select/Select";
import "./Filter.css";

function Filter({ filter, handleChange }) {
  return (
    <div className="filter">
      <SearchBar filter={filter} handleChange={handleChange} />
      <Select handleChange={handleChange} />
    </div>
  );
}

export default Filter;
