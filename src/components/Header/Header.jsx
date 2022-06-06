import "./Header.css";
import ThemeButton from "../ThemeButton/ThemeButton";

export default function Header({theme, toggleTheme}) {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <ThemeButton theme={theme} toggleTheme={toggleTheme}/>
    </header>
  );
}
