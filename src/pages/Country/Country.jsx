import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import Borders from "../../components/Borders/Borders";
import "./Country.css";

export default function Country() {
  const [countryData, setCountryData] = useState();
  const [searchParams] = useSearchParams();

  const cca2 = searchParams.get("cca2");
  const location = useLocation();

  useEffect(() => {
    const getCountryData = async () => {
      const url = `https://restcountries.com/v3.1/alpha/${cca2.toLowerCase()}`;
      const response = await axios(url);
      const data = await response.data;
      setCountryData(data[0]);
    };

    getCountryData();
  }, [location.pathname]);

  return (
    <>
      <BackButton />
      {!countryData && <div>Loading...</div>}
      {countryData && (
        <div className="country">
          <img
            className="country__flag"
            src={countryData.flags.png}
            alt={countryData.name.common}
          />
          <div className="country__info">
            <h1 className="country__name">{countryData.name.common}</h1>
            <ul className="country__list">
              {/* ---------------------- Native name ----------------------- */}
              <li className="country__list-item">
                Native name:{" "}
                <span>
                  {Object.values(countryData.name.nativeName)[0].official}
                </span>
              </li>
              {/* ---------------------- Native name ----------------------- */}
              {/* ---------------------- Population ------------------------ */}
              <li className="country__list-item">
                Population: <span>{countryData.population}</span>
              </li>
              {/* ---------------------- Population ------------------------ */}
              {/* ------------------------ Region -------------------------- */}
              <li className="country__list-item">
                Region: <span>{countryData.region}</span>
              </li>
              {/* ------------------------ Region -------------------------- */}
              {/* ---------------------- Sub Region ------------------------ */}
              <li className="country__list-item">
                Sub Region: <span>{countryData.subregion}</span>
              </li>
              {/* ---------------------- Sub Region ------------------------ */}
              {/* ------------------------ Capital ------------------------- */}
              <li className="country__list-item">
                Capital:{" "}
                <span>
                  {countryData.capital ? countryData.capital : "Unknown"}
                </span>
              </li>
              {/* ------------------------ Capital ------------------------- */}
            </ul>
            <ul className="country__list">
              {/* ------------------- Top Level Domain  -------------------- */}
              <li className="country__list-item">
                Top Level Domain: <span>{countryData.tld[0]}</span>
              </li>
              {/* ------------------- Top Level Domain  -------------------- */}
              {/* ---------------------- Currencies  ----------------------- */}
              <li className="country__list-item">
                Currencies:{" "}
                <span>
                  {countryData.currencies
                    ? Object.values(countryData.currencies).map(
                        (currency, index) =>
                          index === 0 ? currency.name : `, ${currency.name}`
                      )
                    : "Unknown"}
                </span>
              </li>
              {/* ---------------------- Currencies  ----------------------- */}
              {/* ---------------------- Languages  ------------------------ */}
              <li className="country__list-item">
                Languages:{" "}
                <span>{Object.values(countryData.languages).join(", ")}</span>
              </li>
              {/* ---------------------- Languages  ------------------------ */}
            </ul>
            {/* ------------------------- Borders -------------------------  */}
            {countryData.borders && <Borders borders={countryData.borders} />}
            {/* ------------------------- Borders -------------------------  */}
          </div>
        </div>
      )}
    </>
  );
}
