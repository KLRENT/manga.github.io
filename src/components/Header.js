import React from "react";

function Header({ language, setLanguage }) {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      background: "#222",
      color: "#fff",
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/public/logo.png" alt="Manga Logo" style={{ height: "40px", marginRight: "1rem" }} />
        <span style={{
          fontWeight: "bold",
          fontSize: "1.25rem",
          letterSpacing: "2px",
          marginRight: "2rem",
        }}>
          ANA MENU
        </span>
        <button style={{
          marginRight: "2rem",
          padding: "0.5rem 1rem",
          background: "#444",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}>
          Menü
        </button>
        <select style={{ marginRight: "2rem", padding: "0.5rem" }} value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
          <option value="jp">日本語</option>
        </select>
      </div>
      <div>
        <button style={{
          padding: "0.5rem 1.5rem",
          background: "#FF9800",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}>
          Üye Giriş
        </button>
      </div>
    </header>
  );
}

export default Header;