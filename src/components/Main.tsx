

import React, { useEffect, useState } from "react";

interface Album {
  cover_image: string;
  title: string;
}

const Main: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    // Pobieranie najpopularniejszych piosenek z Discogs API
    const token = "nPqnUMJUuKHqAlUybuVPNAFMHWFfHkifSrCMdEMT";
    const perPage = 8;
    // sort=have lub sort=hot dla popularności, type=master lub type=release, track_title dla piosenek
    const url = `https://api.discogs.com/database/search?type=master&sort=hot&per_page=${perPage}&token=${token}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Wyciągamy okładki z pola 'cover_image' i tytuł z pola 'title'
        const results: Album[] = data.results || [];
        setAlbums(results);
      });
  }, []);

  return (
    <div className="fixed right-0 top-18 bottom-0 w-6/7 bg-neutral-900 text-neutral-100 flex rounded-md flex-col p-6 space-y-6 shadow-lg ">
      <div>
        <p className="font-bold text-lg pl-8 pt-12">Najpopularniejsze piosenki (Discogs)</p>
        <div className="flex flex-wrap gap-6 pt-8 pl-8">
          {albums.length > 0 ? (
            albums.map((album, idx) => (
              <div key={idx} className="flex flex-col items-center w-36">
                <img
                  src={album.cover_image}
                  alt={album.title}
                  className="w-32 h-32 rounded-lg shadow mb-2"
                />
                <span className="text-xs text-center line-clamp-2">{album.title}</span>
              </div>
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
