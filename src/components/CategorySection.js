import React from "react";

function CategorySection({ category }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{
        borderBottom: "2px solid #FF9800",
        display: "inline-block",
        padding: "0.5rem 1rem",
      }}>
        {category.title}
      </h2>
      <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
        {category.mangas.map((manga) => (
          <div key={manga.id} style={{
            background: "#eee",
            padding: "1rem",
            borderRadius: "8px",
            minWidth: "150px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}>
            <strong>{manga.title}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;