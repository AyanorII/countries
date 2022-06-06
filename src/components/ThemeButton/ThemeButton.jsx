import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./ThemeButton.css";

function ThemeButton({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="theme-button">
      {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeButton;
