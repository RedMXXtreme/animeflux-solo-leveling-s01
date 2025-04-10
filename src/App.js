import React, { useState, useEffect } from "react";
import { FaRandom, FaSearch } from "react-icons/fa";
const AnimePage = () => {
  const videos = [
   { id: 1,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=1", HD1:"https://boosterx.stream/v/cr79UvbejRyi/", HD2:"https://boosterx.stream/v/cr79UvbejRyi",HDSUB1:"https://boosterx.stream/v/XixeJ7SJmPrJ/",HDSUB2:"https://swishsrv.com/e/7sjzzvonkeam"},
   { id: 2,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=2", HD1:"https://boosterx.stream/v/ayQZEa5fK0cb/", HD2:"https://boosterx.stream/v/ayQZEa5fK0cb/",HDSUB1:"https://boosterx.stream/v/xuIaXAlcwJn8/",HDSUB2:"https://swishsrv.com/e/w5yg33r7x771"},
   { id: 3,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=3", HD1:"https://boosterx.stream/v/c4pZqS6z4h7u/", HD2:"https://boosterx.stream/v/c4pZqS6z4h7u/",HDSUB1:"https://boosterx.stream/v/1ZA0tMe76Qgl/",HDSUB2:"https://swishsrv.com/e/p40zt4mq13vp"},
   { id: 4,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=4", HD1:"https://boosterx.stream/v/kT9lDfzXD03G/", HD2:"https://boosterx.stream/v/kT9lDfzXD03G/",HDSUB1:"https://boosterx.stream/v/3jfMvzk0Ho9b/",HDSUB2:"https://swishsrv.com/e/fvqxqy2b6g9k"},
   { id: 5,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=5", HD1:"https://boosterx.stream/v/YM001tYU4rkd/", HD2:"https://boosterx.stream/v/YM001tYU4rkd/",HDSUB1:"https://boosterx.stream/v/ca5B2pBDizhc/",HDSUB2:"https://swishsrv.com/e/drz668ry4ybc"},
   { id: 6,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=6", HD1:"https://boosterx.stream/v/Q0PLDQijgm0O/", HD2:"https://boosterx.stream/v/Q0PLDQijgm0O",HDSUB1:"https://boosterx.stream/v/OTKjmUF18kaa/",HDSUB2:"https://swishsrv.com/e/1f40m4q22b27"},
   { id: 7,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=7", HD1:"https://newer.stream/v/biOC36u2T3mP/", HD2:"https://newer.stream/v/biOC36u2T3mP/",HDSUB1:"https://boosterx.stream/v/hJBcgflQcW3w/",HDSUB2:"https://swishsrv.com/e/9vthxvlhowz7"},
   { id: 8,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=8", HD1:"https://newer.stream/v/eOYzCPabTlMz/", HD2:"https://newer.stream/v/eOYzCPabTlMz/",HDSUB1:"https://newer.stream/v/AyiRfnAXSm4j/",HDSUB2:"https://swishsrv.com/e/9j6k8lkby4uz"},
   { id: 9,  src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=9", HD1:"https://newer.stream/v/xdr6HXJk8jw6/", HD2:"https://newer.stream/v/xdr6HXJk8jw6/",HDSUB1:"https://newer.stream/v/zaty38Pnzh01/",HDSUB2:"https://swishsrv.com/e/8ohsmw5ri49v"},
   { id: 10, src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=10", HD1:"https://newer.stream/v/nwLINPQ6BfXa/", HD2:"https://newer.stream/v/nwLINPQ6BfXa/",HDSUB1:"https://newer.stream/v/7ZPoQRFeDFGJ/",HDSUB2:"https://sstream.site/e/efquvldg1zm7"},
   { id: 11, src: "https://yasdownloads.org/solo-leveling-18718?season=01&episode=11", HD1:"https://newer.stream/v/YlZkbNwZrLbH/", HD2:"https://newer.stream/v/YlZkbNwZrLbH/",HDSUB1:"https://newer.stream/v/AoprcnoEj3cq/",HDSUB2:"https://sstream.site/e/okcdfc2ipxm0"},
   { id: 12, src: "https://yasdownloads.org/solo-leveling-season-2-arise-from-the-shadow-19413?season=01&episode=12", HD1:"https://newer.stream/v/zjQAByzSFcNo/", HD2:"https://newer.stream/v/zjQAByzSFcNo/",HDSUB1:"https://newer.stream/v/a0DvbdJVqTly/",HDSUB2:"https://sstream.site/e/romcmsmp8apo"},   
  ];

  const ranvideo = [
    { link: "https://animeflux-deathnote.pages.dev/"},
    { link: "https://animeflux-shingeki-no-kyojin.pages.dev/"},
    { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/"},
    { link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-s01.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-s02.pages.dev/"},
    { link:"https://animeflux-jujutsukaisen-0.pages.dev/"},
    { link:"https://animeflux-puka-puka-juju.pages.dev/"},
    { link: "https://animeflux-solo-leveling-s01.pages.dev/"}, // Example random link
    { link: "https://animeflux-sololeveling-arise-from-the-shadow-s02.pages.dev/"}, // Example random link

  // Add more random links here
    
  ];

  const searchLinks = {
    "Death Note": { link: "https://animeflux-deathnote.pages.dev/", img: "https://static1.animekai.to/7e/i/f/bf/67664a569f3a5@100.jpg", year: "2006", type: "TV", rating: "R" },
    "Shingeki no Kyojin": { link: "https://animeflux-shingeki-no-kyojin.pages.dev/", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2013", type: "TV", rating: "R" },
    "Demon Slayer: Kimetsu no Yaiba": { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/", img: "https://static1.animekai.to/70/i/5/79/67664a9bdad80@300.jpg", year: "2019", type: "TV", rating: "PG-R" },
    "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/", img: "https://static1.animekai.to/78/i/0/44/67664a81b5dd4@300.jpg", year: "2021", type: "Movie", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/", img: "https://static1.animekai.to/d3/i/e/9c/67664a00ed86e@300.jpg", year: "2021", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/", img: "https://static1.animekai.to/28/i/d/60/67664938b51c4@300.jpg", year: "2023", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/", img: "https://static1.animekai.to/d1/i/d/30/67664a1707993@300.jpg", year: "2024", type: "TV", rating: "PG-R"},
    "Hunter x Hunter (2011)": {link:"", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2011", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S1": {link:"https://animeflux-jujutsukaisen-s01.pages.dev/", img: "https://static1.animekai.to/43/i/f/d2/67664a638ddda@100.jpg", year: "2020", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S2": {link:"https://animeflux-jujutsukaisen-s02.pages.dev/", img: "https://static1.animekai.to/44/i/9/b8/6766493099d89@100.jpg", year: "2021", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen 0": {link:"https://animeflux-jujutsukaisen-0.pages.dev/", img: "https://static1.animekai.to/8d/i/d/0f/67664a6c4ae80@100.jpg", year: "2022", type: "TV", rating: "PG-13"},
    "Puka Puka Juju": {link:"https://animeflux-puka-puka-juju.pages.dev/", img: "https://static1.animekai.to/a5/i/b/76/67664a0d0aeb9@100.jpg", year: "2023", type: "TV", rating: "PG-13"},
  };

  const [currentVideo, setCurrentVideo] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedserver, setSelectedServer] = useState([]);
  const [toggle, setToggle] = useState();
  // Set default video and server on initial render
  React.useEffect(() => {
    const defaultVideo = videos.find(video => video.id === 1);
    setCurrentVideo(defaultVideo.HDSUB1);
    setSelectedServer("HDSUB1");
    setToggle(1);
  }, []);


  
  const movies = Object.keys(searchLinks);


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

  useEffect(() => {
    const handleKeyDown = (e) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+U
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    };

    const handleContextMenu = (e) => {
        e.preventDefault(); // Disable right-click context menu
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleEpisodetoggle = (id) => {
    setToggle((prev) => {
      if (prev === id) {
        return id; // Prevent toggling out
      } else {
        const selectedVideo = videos.find(video => video.id === id);
        if (selectedserver === "HDSUB1") {
          setCurrentVideo(selectedVideo.HDSUB1);
        } else if (selectedserver === "HDSUB2") {
          setCurrentVideo(selectedVideo.HDSUB2);
        } else if (selectedserver === "HD1") {
          setCurrentVideo(selectedVideo.HD1);
        } else if (selectedserver === "HD2") {
          setCurrentVideo(selectedVideo.HD2);
        } else {
          setCurrentVideo(selectedVideo.src);
        }
        return id;
      }
    });
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

     { /* Main Page Content */}
        <div className="flex flex-col lg:flex-row p-4 gap-4">
            <div className="bg-gray-800 p-4 w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md">
            <img
          src="https://static1.animekai.to/86/i/e/d4/67829cc6b52b8.jpg"
          alt="Anime poster"
          className="w-16 md:w-32 lg:w-48"
          style={{ height: "191px", width: "min-content", objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mt-2 text-center" style={{ fontSize: "10px" }}></h2>

            <h2 className="text-xl font-bold mb-4">List of episodes:</h2>
            <div className="grid grid-cols-4 gap-2">
          {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => handleEpisodetoggle(video.id)}
            className={`px-4 py-2 rounded-lg text-center ${
              toggle === video.id ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
              >
            {video.id}
              </button>
          ))}
            </div>
          </div>
          <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={currentVideo}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay" 
            allowFullScreen
          ></iframe>
            </div>
        {/* Episode Selection UI */}

        {videos.map((video) => (
        toggle === video.id && (
       <div className="mt-6 w-full bg-gray-800 p-4 rounded-lg max-w-lg mx-auto text-center shadow-lg" style={{ maxWidth: "67rem" }}>
       <div className="bg-yellow-400 text-black p-3 rounded-t-lg font-bold">
        <p>You are watching</p>
        <p className="text-lg">Episode {video.id}</p>
        <p className="text-sm mt-1">If the current server doesn't work, please try other servers beside.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-b-lg text-center">
        <div className="mb-4">
          <p className="text-yellow-400 font-semibold inline-flex items-center">
            <span className="mr-2">🔠 SUB:</span>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB1");
                setCurrentVideo(video.HDSUB1);
              }}
            >
              HD-1
            </button>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB2");
                setCurrentVideo(video.HDSUB2);
              }}
            >
              HD-2
            </button>
          </p>
          <div className="mt-4">
          <p className="text-yellow-300 font-semibold inline-flex items-center">
            <span className="mr-2">🎤 DUB:</span>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD1");
                setCurrentVideo(video.HD1);
              }}
            >
              HD-1
            </button>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD2");
                setCurrentVideo(video.HD2);
              }}
            >
              HD-2
            </button>
            <button
              style={{ fontSize: "15px" }}
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "Multi" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("Multi");
                setCurrentVideo(video.src);
              }}
            >
              Multi
            </button>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
))}
      <div className="p-4 mt-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Seasons</h2>
        <div className="flex gap-4 overflow-x-auto">
          <a href="https://www.animekai.to/seasons/season-1"><button>
          <div className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48"
          style={{ backgroundImage: "url('https://static1.animekai.to/a6/i/b/01/67664ac5d6eaa@300.jpg')", backgroundSize: "cover" }}>
            <h3 className="font-bold">Season 1</h3>
            <span className="bg-red-600 px-2 py-1 rounded text-sm">12 Eps</span>
          </div>
          </button>
          </a>
          <a href="https://www.animekai.to/seasons/season-2">
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
