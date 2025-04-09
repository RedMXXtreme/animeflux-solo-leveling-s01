import React, { useState } from "react";
import { FaRandom, FaSearch } from "react-icons/fa";

const AnimePage = () => {
  const videos = [
    { id: 1,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=1", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 2,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=2", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 3,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=3", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 4,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=4", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 5,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=5", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 6,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=6", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 7,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=7", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 8,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=8", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 9,  MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=9", HD1: "", HD2: "", HDSUB1: "", HDSUB2: "" },
    { id: 10, MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=10", HD1:"", HD2:"", HDSUB1:"", HDSUB2:"" },
    { id: 11, MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=11", HD1:"", HD2:"", HDSUB1:"", HDSUB2:"" },
    { id: 12, MULTI:"https://yasdownloads.org/solo-leveling-18718?season=01&episode=12", HD1:"", HD2:"", HDSUB1:"", HDSUB2:"" },

  ];

  const ranvideo = [
    { link: "https://animekai.to/watch/the-apothecary-diaries-n5ny#ep=1" },
    { link: "https://pro.gtxgamer.site/embed/random2" },
    { link: "https://pro.gtxgamer.site/embed/random3" }
  ];

  const searchLinks = {
    "Death Note": { link: "https://example.com/stranger-things", img: "https://static1.animekai.to/7e/i/f/bf/67664a569f3a5@100.jpg", year: "2006", type: "TV", rating: "R" },
    "Shingeki no Kyojin": { link: "https://example.com/breaking-bad", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2013", type: "TV", rating: "R" },
    "Demon Slayer: Kimetsu no Yaiba": { link: "https://example.com/squid-game", img: "https://static1.animekai.to/70/i/5/79/67664a9bdad80@300.jpg", year: "2019", type: "TV", rating: "PG-R" },
    "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc": {link:"", img: "https://static1.animekai.to/78/i/0/44/67664a81b5dd4@300.jpg", year: "2021", type: "Movie", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc": {link:"", img: "https://static1.animekai.to/d3/i/e/9c/67664a00ed86e@300.jpg", year: "2021", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc": {link:"", img: "https://static1.animekai.to/28/i/d/60/67664938b51c4@300.jpg", year: "2023", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc": {link:"", img: "https://static1.animekai.to/d1/i/d/30/67664a1707993@300.jpg", year: "2024", type: "TV", rating: "PG-R"},
    "Hunter x Hunter (2011)": {link:"", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2011", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S1": {link:"", img: "https://static1.animekai.to/43/i/f/d2/67664a638ddda@100.jpg", year: "2020", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S2": {link:"", img: "https://static1.animekai.to/44/i/9/b8/6766493099d89@100.jpg", year: "2021", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen 0": {link:"", img: "https://static1.animekai.to/8d/i/d/0f/67664a6c4ae80@100.jpg", year: "2022", type: "TV", rating: "PG-13"},
    "Puka Puka Juju": {link:"", img: "https://static1.animekai.to/a5/i/b/76/67664a0d0aeb9@100.jpg", year: "2023", type: "TV", rating: "PG-13"},
  };

  const [currentVideo, setCurrentVideo] = useState(videos[0].src);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  
  const movies = Object.keys(searchLinks);


  const handleEpisodeClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * ranvideo.length);
    window.location.href = ranvideo[randomIndex].link;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 0) {
      const results = movies.filter((movie) =>
        movie.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchLinks[searchQuery]) {
      window.location.href = searchLinks[searchQuery];
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
    <nav className="bg-gray-900 p-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
      <a href="/">
      <span className="text-orange-500 text-2xl font-bold">Anime Flux</span>
      </a>

      <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white p-2">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search for a show..."
            className="w-full px-3 py-2 outline-none text-black"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {filteredMovies.length > 0 && (
          <ul className="absolute w-full bg-gray-800 border border-gray-600 mt-1 rounded-lg shadow-lg overflow-hidden">
            {filteredMovies.map((movie, index) => (
              <li
                key={index}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-700"
                onClick={() => window.location.href = searchLinks[movie].link}
                onKeyDown={handleKeyPress}
                
              >
                <img src={searchLinks[movie].img} alt={movie} className="w-12 h-12 rounded-md mr-3" />
                <div>
                  <p className="text-white font-bold">{movie}</p>
                  <p className="text-gray-400 text-sm">{searchLinks[movie].year} • {searchLinks[movie].type} • {searchLinks[movie].rating}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        </div>
        <button onClick={handleRandom} className="text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition">
          <FaRandom />
        </button>
      </nav>

      {/* Main Page Content */}
      <div className="flex flex-col lg:flex-row p-4 gap-4">
      
        {/* Sidebar */}
        <div className="bg-gray-800 p-4 w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md">
          <img
            src="https://static1.animekai.to/a6/i/b/01/67664ac5d6eaa.jpg"
            alt="Anime poster"
            className="w-full rounded-lg"
            style={{ height: "191px", width:"min-content",objectFit: "cover" }}
          />
          <h2 className="text-2xl font-bold mt-2 text-center" style={{ fontSize: "10px" }}>Sung Jin-Woo, dubbed the weakest hunter of all mankind, grows stronger by the day with the supernatural powers he has gained. However, keeping his skills hidden becomes more difficult as dungeon-related incidents pile up around him. When Jin-Woo and a few other low-ranked hunters are the only survivors of a dungeon that turns out to be a bigger challenge than initially expected, he draws</h2>
          <h2 className="text-xl font-bold mb-4">List of episodes:</h2>
          <div className="grid grid-cols-4 gap-2">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => handleEpisodeClick(video.MULTI)}
                className={`px-4 py-2 rounded-lg text-center ${currentVideo === video.MULTI ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                {video.id}
              </button>
            ))}

          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
          <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={currentVideo}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay" 
              allowFullScreen
              style={{ backgroundColor: "black" }}
            ></iframe>
          </div>
        {/* Seasons Section */}
      <div className="p-4 mt-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Seasons</h2>
        <div className="flex gap-4 overflow-x-auto">
          <a href="https://animeflux-solo-leveling-s01.pages.dev/"><button>
          <div className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48"
          style={{ backgroundImage: "url('https://static1.animekai.to/a6/i/b/01/67664ac5d6eaa@300.jpg')", backgroundSize: "cover" }}>
            <h3 className="font-bold">Season 1</h3>
            <span className="bg-red-600 px-2 py-1 rounded text-sm">12 Eps</span>
          </div>
          </button>
          </a>
          <a href="https://animeflux-sololeveling-arise-from-the-shadow-s02.pages.dev/">
          <button>
          <div className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48"
          style={{ backgroundImage: "url('https://static1.animekai.to/86/i/e/d4/67829cc6b52b8.jpg')", backgroundSize: "cover" }}>
            <h3 className="font-bold">Season 2</h3>
            <span className="bg-red-600 px-2 py-1 rounded text-sm">13 Eps</span>
          </div>
          </button>
          </a>
        </div>
      </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-8 p-4 bg-black text-gray-400 text-center">
        <p>Copyright ©AnimeFlux. All Rights Reserved</p>
        <p className="text-sm mt-1">
          This site does not store any files on its server. All contents are provided by non-affiliated third parties.
        </p>
        <p className="mt-2">Socials: <span className="text-white">🐦</span></p>

      </footer>
    </div>

    
  );
};

export default AnimePage;
