// import { Link } from "react-router-dom";

// function CountryCard({ country }) {
//   const code =
//     country.cca3 || country.alpha3Code || country.cioc || country.numericCode;
//   const name =
//     country.name?.common || country.name || country.nativeName || "Unknown";
//   const flagSrc =
//     (country.flags && (country.flags.svg || country.flags.png)) ||
//     country.flag ||
//     "";

//   return (
//     <Link
//       to={`/country/${code}`}
//       state={{ country }}
//       className="country-card-link"
//       style={{ textDecoration: "none" }}
//     >
//       <div className="country-card">
//         <img src={flagSrc} alt={`${name} flag`} className="country-flag" />
//         <div className="country-info">
//           <h3>{name}</h3>
//           <p>
//             <strong>Population:</strong>{" "}
//             {country.population?.toLocaleString() || "N/A"}
//           </p>
//           <p>
//             <strong>Region:</strong> {country.region || "N/A"}
//           </p>
//           <p>
//             <strong>Capital:</strong>{" "}
//             {Array.isArray(country.capital)
//               ? country.capital[0]
//               : country.capital || "N/A"}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default CountryCard;

import { Link } from "react-router-dom";
import useStore from "../Zustand/useStore";

function CountryCard({ country }) {
  const setCountry = useStore((state) => state.setCountry);
  const code =
    country.cca3 || country.alpha3Code || country.cioc || country.numericCode;
  const name =
    country.name?.common || country.name || country.nativeName || "Unknown";
  const flagSrc =
    (country.flags && (country.flags.svg || country.flags.png)) ||
    country.flag ||
    "";

  const handleClick = () => {
    setCountry(country);
  };

  return (
    <Link
      to={`/country/${code}`}
      state={{ country }}
      onClick={handleClick}
      className="country-card-link"
      style={{ textDecoration: "none" }}
    >
      <div className="country-card">
        <img src={flagSrc} alt={`${name} flag`} className="country-flag" />
        <div className="country-info">
          <h3>{name}</h3>
          <p>
            <strong>Population:</strong>{" "}
            {country.population?.toLocaleString() || "N/A"}
          </p>
          <p>
            <strong>Region:</strong> {country.region || "N/A"}
          </p>
          <p>
            <strong>Capital:</strong>{" "}
            {Array.isArray(country.capital)
              ? country.capital[0]
              : country.capital || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
