// import { useState } from "react";
// import CountryCard from "./CountryCard";

// function SearchFilter({ countries }) {
//   const [query, setQuery] = useState("");
//   const [region, setRegion] = useState("");

//   const filteredCountries = countries.filter((country) => {
//     const name = country.name?.common || country.name || "";
//     const matchesQuery = name.toLowerCase().includes(query.toLowerCase());
//     const matchesRegion = !region || country.region === region;
//     return matchesQuery && matchesRegion;
//   });

//   return (
//     <>
//       <div className="search-filter">
//         <input
//           type="text"
//           placeholder="Search for a country..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="search-input"
//         />
//         <select
//           className="filter-select"
//           value={region}
//           onChange={(e) => setRegion(e.target.value)}
//         >
//           <option value="">All regions</option>
//           <option value="Africa">Africa</option>
//           <option value="Americas">Americas</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//         </select>
//       </div>

//       <div className="countries-grid">
//         {filteredCountries.map((c) => (
//           <CountryCard
//             key={c.cca3 || c.alpha3Code || c.cioc || c.numericCode}
//             country={c}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default SearchFilter;

import { useState } from "react";
import CountryCard from "./CountryCard";
import useStore from "../Zustand/useStore";

function SearchFilter() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const countries = useStore((state) => state.countries);

  const filteredCountries = countries.filter((country) => {
    const name = country.name?.common || country.name || "";
    const matchesQuery = name.toLowerCase().includes(query.toLowerCase());
    const matchesRegion = !region || country.region === region;
    return matchesQuery && matchesRegion;
  });

  return (
    <>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <select
          className="filter-select"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">All regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="countries-grid">
        {filteredCountries.map((c) => (
          <CountryCard
            key={c.cca3 || c.alpha3Code || c.cioc || c.numericCode}
            country={c}
          />
        ))}
      </div>
    </>
  );
}
export default SearchFilter;
