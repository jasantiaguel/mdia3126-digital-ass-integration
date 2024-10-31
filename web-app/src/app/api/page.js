"use client";
import { useState } from 'react';

export default function Page() {
  // ✔️ clickable button to call API
  // function to call API
  // ✔️ somewhere to output data
  // iterator to work through data and format it
  // ✔️ display an empty and fulfilled state
  // ✔️ create a state to hold the data

  const [ media , setMedia ] = useState(null);
  const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=2';

  async function fetchMedia() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMedia(data);
  }

  const MediaOutput = () => {
    if (media) {
      let mediaList = [];
      media.forEach(( mediaItem , index ) => {
        mediaList.push(
          <li className="mb-4" key={index}>
            <h2 className="text-xl">{mediaItem.title}</h2>
            <img src={mediaItem.url} alt={mediaItem.explanation} />
            <p>{mediaItem.explanation}</p>
          </li>
        )
    })

    return (
        <div className="p-4 mb-4 border-4 border-black text-center">
          <ul>
            {mediaList}
          </ul>
        </div>
      )
    }

    return (
      <div className="p-4 mb-4 border-4 border-black text-center">
        🍜 NO MEDIA YET 🍜
      </div>
    )
  }

  return (
    <div className="p-4 bg-green-800">
      <header className="p-4 mb-4 border-4 border-black text-center">
        <h1 className="text-4xl mb-4">Welcome to my product page</h1>
        <button 
          className="p-4 bg-black text-white rounded"
          onClick={fetchMedia}
        >
          Fetch Media 😈
        </button>
      </header>
      <MediaOutput />
    </div>
  );
}
