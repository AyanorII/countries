import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Country from "./pages/Country/Country";
import Countries from "./pages/Coutries/Countries";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/countries/:country" element={<Country />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
