// import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import HomeIcon from "@mui/icons-material/Home";

// function CountryDetail({ countries }) {
//   const { code } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const stateCountry = location.state?.country;
//   const [country, setCountry] = useState(stateCountry || null);

//   useEffect(() => {
//     if (code) {
//       axios
//         .get(`https://restcountries.com/v3.1/alpha/${code}`)
//         .then((res) => setCountry(res.data[0]))
//         .catch((err) => console.error("Failed to fetch country:", err));
//     }
//   }, [code]);

//   if (!country) return <p>Loading...</p>;

//   const nativeName =
//     typeof country.nativeName === "string"
//       ? country.nativeName
//       : country.name?.nativeName
//       ? Object.values(country.name.nativeName)[0]?.common
//       : country.name?.official || "—";

//   const currencies = Array.isArray(country.currencies)
//     ? country.currencies
//         .map((c) => `${c.name}${c.symbol ? ` (${c.symbol})` : ""}`)
//         .join(", ")
//     : country.currencies
//     ? Object.values(country.currencies)
//         .map((c) => `${c.name}${c.symbol ? ` (${c.symbol})` : ""}`)
//         .join(", ")
//     : "—";

//   const languages = Array.isArray(country.languages)
//     ? country.languages.map((l) => l.name).join(", ")
//     : country.languages
//     ? Object.values(country.languages).join(", ")
//     : "—";

//   const tld = country.topLevelDomain
//     ? country.topLevelDomain.join(", ")
//     : country.tld
//     ? country.tld.join(", ")
//     : "—";

//   return (
//     <div className="detail-container">
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: "20px",
//         }}
//       >
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           <ArrowBackIcon />
//         </button>

//         <button className="back-btn" onClick={() => navigate("/")}>
//           <HomeIcon />
//         </button>
//       </div>

//       <div className="detail-grid">
//         <div className="flag-wrap">
//           <img
//             src={country.flags?.svg || country.flag || country.flags?.png}
//             alt={`${country.name?.common || country.name} flag`}
//             className="detail-flag"
//           />
//         </div>

//         <div className="detail-info">
//           <h2>{country.name?.common || country.name}</h2>

//           <div className="detail-columns">
//             <div className="col">
//               <p>
//                 <strong>Native Name:</strong> {nativeName}
//               </p>
//               <p>
//                 <strong>Population:</strong>{" "}
//                 {country.population?.toLocaleString() || "0"}
//               </p>
//               <p>
//                 <strong>Region:</strong> {country.region || "—"}
//               </p>
//               <p>
//                 <strong>Sub Region:</strong> {country.subregion || "—"}
//               </p>
//               <p>
//                 <strong>Capital:</strong>{" "}
//                 {Array.isArray(country.capital)
//                   ? country.capital[0]
//                   : country.capital || "—"}
//               </p>
//             </div>

//             <div className="col">
//               <p>
//                 <strong>Top Level Domain:</strong> {tld}
//               </p>
//               <p>
//                 <strong>Currencies:</strong> {currencies}
//               </p>
//               <p>
//                 <strong>Languages:</strong> {languages}
//               </p>
//             </div>
//           </div>

//           <div className="borders">
//             <strong>Border Countries:</strong>
//             <div className="border-list">
//               {country.borders?.length > 0 ? (
//                 country.borders.map((b) => (
//                   <Link key={b} to={`/country/${b}`} className="border-btn">
//                     {countries.find((c) => c.alpha3Code === b || c.cca3 === b)
//                       ?.name?.common ||
//                       countries.find((c) => c.alpha3Code === b)?.name ||
//                       b}
//                   </Link>
//                 ))
//               ) : (
//                 <span>None</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CountryDetail;

import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import useStore from "../Zustand/useStore";

function CountryDetail() {
  const { code } = useParams();
  const navigate = useNavigate();
  const country = useStore((state) => state.country);
  const countries = useStore((state) => state.countries);
  const fetchCountryByCode = useStore((state) => state.fetchCountryByCode);
  const fetchCountries = useStore((state) => state.fetchCountries);

  useEffect(() => {
    if (countries.length === 0) fetchCountries();
    if (code) fetchCountryByCode(code);
  }, [code, countries.length, fetchCountries, fetchCountryByCode]);

  if (!country) return <p>Loading...</p>;

  const nativeName =
    typeof country.nativeName === "string"
      ? country.nativeName
      : country.name?.nativeName
      ? Object.values(country.name.nativeName)[0]?.common
      : country.name?.official || "—";

  const currencies = Array.isArray(country.currencies)
    ? country.currencies
        .map((c) => `${c.name}${c.symbol ? ` (${c.symbol})` : ""}`)
        .join(", ")
    : country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name}${c.symbol ? ` (${c.symbol})` : ""}`)
        .join(", ")
    : "—";

  const languages = Array.isArray(country.languages)
    ? country.languages.map((l) => l.name).join(", ")
    : country.languages
    ? Object.values(country.languages).join(", ")
    : "—";

  const tld = country.topLevelDomain
    ? country.topLevelDomain.join(", ")
    : country.tld
    ? country.tld.join(", ")
    : "—";

  return (
    <div className="detail-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </button>

        <button className="back-btn" onClick={() => navigate("/")}>
          <HomeIcon />
        </button>
      </div>

      <div className="detail-grid">
        <div className="flag-wrap">
          <img
            src={country.flags?.svg || country.flag || country.flags?.png}
            alt={`${country.name?.common || country.name} flag`}
            className="detail-flag"
          />
        </div>

        <div className="detail-info">
          <h2>{country.name?.common || country.name}</h2>

          <div className="detail-columns">
            <div className="col">
              <p>
                <strong>Native Name:</strong> {nativeName}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population?.toLocaleString() || "0"}
              </p>
              <p>
                <strong>Region:</strong> {country.region || "—"}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion || "—"}
              </p>
              <p>
                <strong>Capital:</strong>{" "}
                {Array.isArray(country.capital)
                  ? country.capital[0]
                  : country.capital || "—"}
              </p>
            </div>

            <div className="col">
              <p>
                <strong>Top Level Domain:</strong> {tld}
              </p>
              <p>
                <strong>Currencies:</strong> {currencies}
              </p>
              <p>
                <strong>Languages:</strong> {languages}
              </p>
            </div>
          </div>

          <div className="borders">
            <strong>Border Countries:</strong>
            <div className="border-list">
              {country.borders?.length > 0 ? (
                country.borders.map((b) => (
                  <Link key={b} to={`/country/${b}`} className="border-btn">
                    {countries.find((c) => c.alpha3Code === b || c.cca3 === b)
                      ?.name?.common ||
                      countries.find((c) => c.alpha3Code === b)?.name ||
                      b}
                  </Link>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
