"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  // TODO
  //
  // button that fetches and displays 5 results
  //  - handle and format content
  //  - display (empty, loading, fulfilled state)
  //  - includes 3 separate elements, including media
  //    - media, title, date
  //  - styling
  //    - breakpoints (mobile-first)
  //  - clear data

  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchImages() {
    const API_URL = "https://digimon-api.vercel.app/api/digimon";
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const limitedData = data.slice(0, 5);
      setImageData(limitedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function clearData() {
    setImageData(null);
  }

  // Atom: Button
  const Button = ({ onClick, children }) => (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );

  // Molecule: Header
  const Header = () => {
    return (
      <section>
        <Button onClick={fetchImages}>Fetch 📸</Button>
        <Button onClick={clearData}>Clear</Button>
      </section>
    );
  };

  // Molecule: ImageItem
  const ImageItem = ({ image }) => (
    <div key={image.name}>
      <img className={styles.image} src={image.img} alt={image.name} />
      <h3>{image.name}</h3>
      <p>{image.level}</p>
    </div>
  );

  // Organism: ImageListContainer
  const ImageListContainer = () => {
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {imageData && (
          <div>
            {imageData.map((image) => (
              <ImageItem key={image.name} image={image} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <ImageListContainer />
    </div>
  );
}