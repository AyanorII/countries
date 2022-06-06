import RSelect from "react-select";
import "./Select.css";

function Select({ handleChange }) {
  const options = [
    {
      value: "africa",
      label: "Africa",
    },
    {
      value: "americas",
      label: "Americas",
    },
    {
      value: "asia",
      label: "Asia",
    },
    {
      value: "europe",
      label: "Europe",
    },
    {
      value: "oceania",
      label: "Oceania",
    },
  ];


  return (
    <RSelect
      options={options}
      onChange={(e) => handleChange(e)}
      classNamePrefix="react-select"
    ></RSelect>
  );
}

export default Select;
