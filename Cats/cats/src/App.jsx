import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [catImages, setCatImages] = useState(Array(9).fill(null));
  const [loadingImages, setLoadingImages] = useState(true);
  const [factOverlay, setFactOverlay] = useState(null);
  const [loadingFactIndex, setLoadingFactIndex] = useState(null);

  useEffect(() => {
    fetchCatImages();
  }, []);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function fetchCatImages() {
    setLoadingImages(true);
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=9");
      const data = await res.json();
      await sleep(1500); // Simulate loading delay
      setCatImages(data.slice(0, 9).map(cat => cat.url));
    } catch (err) {
      console.error("Failed to fetch cat images:", err);
    }
    setLoadingImages(false);
    setFactOverlay(null);
  }

  async function fetchCatFact(index) {
    setLoadingFactIndex(index);
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFactOverlay({ index, fact: data.fact });
    } catch (err) {
      console.error("Failed to fetch cat fact:", err);
    }
    setLoadingFactIndex(null);
  }

  return (
    <div className="p-6 flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Cat Gallery 🐱</h1>

      <div className="grid grid-cols-3 gap-4">
        {catImages.map((img, idx) => (
          <div key={idx} className="relative w-[200px] h-[200px] overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
            {img ? (
              <img
                src={img}
                alt="A cute cat"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => fetchCatFact(idx)}
              />
            ) : (
              <div className="loader"></div> // Show spinner if image not ready
            )}
            {factOverlay?.index === idx && (
              <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center p-2 text-white text-center text-sm overflow-hidden">
                {loadingFactIndex === idx ? "Loading..." : factOverlay.fact}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={fetchCatImages}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
      >
        Fetch New Cats
      </button>
    </div>
  );
}
