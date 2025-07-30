import React, { useState } from "react";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";

function App() {
  const [language, setLanguage] = useState("tr");

  const categories = [
    {
      title: "Favoriler",
      mangas: [
        { id: 1, title: "Naruto" },
        { id: 2, title: "Attack on Titan" },
      ],
    },
    {
      title: "En Çok Sevilenler",
      mangas: [
        { id: 3, title: "One Piece" },
        { id: 4, title: "Demon Slayer" },
      ],
    },
    {
      title: "En Çok Beğenilenler",
      mangas: [
        { id: 5, title: "Bleach" },
        { id: 6, title: "My Hero Academia" },
      ],
    },
  ];

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main style={{ padding: "2rem" }}>
        {categories.map((cat) => (
          <CategorySection key={cat.title} category={cat} />
        ))}
      </main>
    </div>
  );
}

export default App;