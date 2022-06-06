import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target ? e.target.value : e.value);
  };

  // Gets all countries
  useEffect(() => {
    const getCountries = async () => {
      const url = "https://restcountries.com/v3.1/all";
      const response = await axios(url);
      const data = response.data;

      setCountries(data);
    };

    getCountries();
  }, []);

  return (
    <div>
      <Filter filter={filter} handleChange={handleChange} />
      <div className="countries">
        {countries.length === 0 && (
          <div className="countries__loading">Loading...</div>
        )}
        {countries
          .filter((country) => {
            return (
              country.name.common
                .toLowerCase()
                .includes(filter.toLowerCase()) ||
              country.region.toLowerCase().includes(filter.toLowerCase())
            );
          })
          .map((country) => {
            const { capital, flags, population, region, name, cca2 } = country;

            const formattedPopulation = new Intl.NumberFormat("en-US").format(
              population
            );

            const slug = name.common.toLowerCase().replace(/ /g, "-");

            return (
              <div key={cca2}>
                <Link to={`/countries/${slug}?cca2=${cca2}`}>
                  <Card
                    name={name.common}
                    region={region}
                    flag={flags.png}
                    capital={capital}
                    population={formattedPopulation}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
