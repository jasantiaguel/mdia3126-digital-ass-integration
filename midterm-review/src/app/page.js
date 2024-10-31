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

  async function fetchImages() {
    const API_URL = "https://picsum.photos/v2/list?limit=5";
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();

    setImageData(data);
    setLoading(false);
  }

  const Header = () => {
    return (
      <section>
        <button className={styles.button} onClick={fetchImages}>
          Fetch 📸
        </button>
      </section>
    );
  };

  const ImageListContainer = () => {
    if (loading) {
      return <section>Loading...</section>;
    }
    if (imageData) {
      const imageListItems = [];
      imageData.forEach((image, i) => {
        // author: "Alejandro Escamilla"
        // download_url: "https://picsum.photos/id/0/5000/3333"
        // height: 3333
        // id: "0"
        // url: "https://unsplash.com/photos/yC-Yzbqy7PY"
        // width: 5000
        imageListItems.push(
          <article key={image.id}>
            <img src={image.download_url} width="500"/>
            <p>Author: {image.author}</p>
            <a href={image.url}>View this image on Unsplash</a>
            <hr />
          </article>
        );
      });

      return <section style={{ maxwidth: '50%' }}>{imageListItems}</section>;
    }

    return <section>no images fetched</section>;
  };

  const DataDisplay = () => {
    return <section>displaying data</section>;
  };

  return (
    <div className={styles.page}>
      <Header />
      <ImageListContainer />
      <DataDisplay />
    </div>
  );
}
