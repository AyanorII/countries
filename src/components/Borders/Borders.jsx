import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Borders.css";

function Borders({ borders }) {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getBorders = async (code) => {
      const url = `https://restcountries.com/v3.1/alpha/${code}`;
      const response = await axios.get(url);
      const data = await response.data[0];

      return { name: data.name.common, code: data.cca2 };
    };

    const resolveBorders = async () => {
      const resolvedCountries = await Promise.all(
        borders.map((code) => {
          return getBorders(code);
        })
      );

      setCountries(resolvedCountries);
    };

    resolveBorders();
  }, [borders]);

  return (
    <div className="borders">
      <h2>Border Countries:</h2>
      <ul className="borders__list">
        {countries &&
          countries.map((country) => {
            const { name, code } = country;

            const slug = name.toLowerCase().replace(/ /g, "-");

            return (
              <li key={code} className="borders__link">
                <Link to={`/countries/${slug}?cca2=${code}`}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Borders;
