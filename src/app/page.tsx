"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=7afBVjDzHRcYoW5f4aJn7PyPMr6Lob56FJlmsRp0"
      )
      .then((response) => {
        setApodData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-dark-background flex flex-col items-center justify-center">
      <nav className="w-full h-16 bg-white bg-opacity-10 backdrop-blur-md fixed top-0 z-50 flex items-center justify-center text-2xl font-bold shadow-lg">
        ⭐ Photo of the Day ⭐
      </nav>
      {apodData && (
        <div className="bg-red-300 bg-opacity-10 backdrop-blur-md p-8 rounded-2xl flex flex-col items-center justify-center w-3/4 h-3/4 mt-20">
          <h1 className="text-6xl font-bold mb-4 text-shadow-neon-blue animate-neon">
            {apodData.title}
          </h1>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl shadow-lg">
            <Image
              src={apodData.url}
              alt={apodData.title}
              width={500}
              height={300}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </div>
          <details className="mt-4 bg-dark-primary bg-opacity-80 backdrop-blur-md shadow-purple p-4 rounded-xl w-full overflow-auto">
            <summary>
              <span role="img" aria-label="star">
                ⭐
              </span>{" "}
              Show Description
            </summary>
            <p>{apodData.explanation}</p>
          </details>
        </div>
      )}
    </div>
  );
}
