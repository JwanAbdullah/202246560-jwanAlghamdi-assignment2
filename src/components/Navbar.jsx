import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  // Restore saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.body.classList.add("light");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  {/* In-page navigation links using section IDs */}
  return (
    <nav style={styles.nav}>
      <a href="#about" style={styles.link}>About</a>
      <a href="#experience" style={styles.link}>Experience</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#skills" style={styles.link}>Skills</a>
      <a href="#contact" style={styles.link}>Contact</a>

      <button onClick={toggleTheme} style={styles.toggle} aria-label="Toggle theme">
        {isDark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}


const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "25px",
    background: "rgba(255,255,255,0.1)",
    padding: "15px 30px",
    borderRadius: "10px",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    backdropFilter: "blur(5px)",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    fontWeight: "bold",
    transition: "color 0.2s",
  },
  toggle: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0",
    lineHeight: 1,
  },
};

export default Navbar;