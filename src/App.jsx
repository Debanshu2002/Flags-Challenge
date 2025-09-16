// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import SearchFilter from "./Components/SearchFilter";
// import CountryDetail from "./Components/CountryDetail";
// import backUpData from "../data.json";
// import "./App.css";

// function App() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://restcountries.com/v3.1/all")
//       .then((res) => setCountries(res.data))
//       .catch(() => setCountries(backUpData));
//   }, []);

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<SearchFilter countries={countries} />} />
//         <Route
//           path="/country/:code"
//           element={<CountryDetail countries={countries} />}
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useStore from "./Zustand/useStore";
import Header from "./Components/Header";
import SearchFilter from "./Components/SearchFilter";
import CountryDetail from "./Components/CountryDetail";
import "./App.css";

function App() {
  const fetchCountries = useStore((state) => state.fetchCountries);
  const darkMode = useStore((state) => state.darkMode);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header />
      <Routes>
        <Route path="/" element={<SearchFilter />} />
        <Route path="/country/:code" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
