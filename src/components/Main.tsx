

import React, { useEffect, useState } from "react";

interface Album {
  image: string;
  name: string;
}

const Main: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    // Pobieranie okładek albumów z OSDB Confidence API
    const apiKey = "e7yJKcLCqJKEo-gLHgNY0";
    const albumName = "radio"; // Możesz zmienić na dowolny album
    const limit = 5;
    const url = `https://osdb-api.confidence.sh/rest/${apiKey}/search/album?query=${albumName}&limit=${limit}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Wyciągamy okładki z pola 'image' i nazwę albumu z pola 'name'
        const results: Album[] = data.data || [];
        setAlbums(results);
      });
  }, []);

  return (
    <div className="fixed right-0 top-18 bottom-0 w-6/7 bg-neutral-900 text-neutral-100 flex rounded-md flex-col p-6 space-y-6 shadow-lg ">
      <div>
        <p className="font-bold text-lg pl-8 pt-12">OSDB Confidence Images</p>
        <div className="flex space-x-6 pt-8 pl-8">
          {albums.length > 0 ? (
            albums.map((album, idx) => (
              <img
                key={idx}
                src={album.image}
                alt={album.name}
                className="w-32 h-32 rounded-lg shadow"
              />
            ))
          ) : (
            <span>Ładowanie...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
