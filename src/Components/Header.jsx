import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useEffect } from "react";
import useStore from "../Zustand/useStore";

function Header() {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <h1 className="header-title">Where in the world?</h1>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </header>
  );
}

export default Header;
