import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styleSheet/MovieShow.module.css";
import { Link } from 'react-router-dom';

function MovieShow() {
  const [movies, setMovies] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTv, setSelectedTv] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/discover/movie',
          params: {
            include_adult: 'false',
            include_video: 'false',
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
          },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODAzMjI0OGJlMjNkNTBjZWJlYTg5YTkwZmYxYjRlNyIsInN1YiI6IjY1YmJhODQyMWZkMzZmMDEzMDcxOWEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zanVhKeoF0v1ZSBpAci-P-DBobhJdnashXZ81ceSd4'
          }
        };

        const response = await axios.request(options);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once when the component mounts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/discover/tv',
          params: {
            include_adult: 'false',
            include_null_first_air_dates: 'false',
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc',
          },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODAzMjI0OGJlMjNkNTBjZWJlYTg5YTkwZmYxYjRlNyIsInN1YiI6IjY1YmJhODQyMWZkMzZmMDEzMDcxOWEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zanVhKeoF0v1ZSBpAci-P-DBobhJdnashXZ81ceSd4',
          },
        };

        const response = await axios.request(options);
        setTvShow(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once when the component mounts

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovie = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterTvShow = tvShow.filter((tvShow) =>
    tvShow.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieClick = (image) => {
    setSelectedMovie(image);
   // console.log(image);
  };
  const handleTvClick = (image) => {
    setSelectedTv(image);
    console.log(image);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <div>
            <img
              className={styles.navbarLogo}
              src="/image/netflix-logo.png"
              alt=""
            />
          </div>
          <div>
            <ul className={styles.listItems}>
              <li><Link to={"/"} className="text-decoration-none text-white">Home</Link></li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
            </ul>
          </div>
        </div>
        <div className={styles.navbarRight}>
          <div className="search-bar">
            <input
              value={searchQuery}
              onChange={handleSearch}
              className={styles.inputSearch}
              type="text"
              placeholder="search.."
            />
          </div>
          <div>
            <ul className={styles.listItems}>
              <li>Kids</li>
              <li>
                <i className="fa-solid fa-bell"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Details of selected movie */}
      {selectedMovie ? (
   
      
  <div className={` ${styles.details}`}>
 
      <img className={styles.backdrop_path} src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`} alt=""/>
      <div className={styles.movieDetails}>
      <img className={styles.websiteIcons} src='/image/netflix.png' alt=''/>
      <span className={styles.series}>SERIES</span>
        <h2 className={`text-white fw-bolder ${styles.titleName}`}>{selectedMovie.title}</h2>
        <h6 className='text-white fw-bold'>Available Now</h6>
        <p className={`text-white ${styles.overview}`}>{selectedMovie.overview}</p>
          <button className={styles.playBtn}><i class="fa-solid fa-play"></i> Play</button>
          <button className={styles.moreBtn}>More Info</button>
      </div>
  </div>
      ) : ""}
      
      {/* Movie show */}
      <div className={` ${styles.movieList}`}>
        <h4 className='text-danger pb-2'>Popular Movies on Netflix</h4>

        <div className={styles.container}>
          {filteredMovie.map((filteredMovie) => (
            <div key={filteredMovie.id} onClick={() => handleMovieClick(filteredMovie)}>
              <img className={`card-img-top ${styles.movieImage}`} src={`https://image.tmdb.org/t/p/w500${filteredMovie.poster_path}`} alt={filteredMovie.title} />
              <div className="card-body">
                <h6 className={`card-text`}>{filteredMovie.title}</h6>
              </div>
            </div>
          ))}
        </div>

      </div>
      {selectedTv ? (
        <div id="carouselExampleCaptions" className="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className={styles.backdrop_path} src={`https://image.tmdb.org/t/p/w500${selectedTv.backdrop_path}`} alt=""/>
      <div className={`carousel-caption ${styles.tvdetails}`}>
      <img className={styles.websiteIcons} src='/image/netflix.png' alt=''/>
      <span className={styles.series}>SERIES</span>
        <h2 className={`text-white fw-bolder ${styles.titleName}`}>{selectedTv.name}</h2>
        <h6 className='text-white fw-bold'>Available Now</h6>
        <p className={`text-white ${styles.overview}`}>{selectedTv.overview}</p>
          <button className={styles.playBtn}><i class="fa-solid fa-play"></i> Play</button>
          <button className={styles.moreBtn}>More Info</button>
      </div>
    </div>
   
    </div>
    
  </div>
      ) : ""}
      {/* Tv Show */}
      <div className={styles.movieList}>
        <h4 className='text-danger pb-2'>Popular TV Shows on Netflix</h4>

        <div className={styles.container}>
          {filterTvShow.map((filterTv) => (
            <div key={filterTv.id} onClick={()=> handleTvClick(filterTv)}>
              <img className={`card-img-top ${styles.movieImage}`} src={`https://image.tmdb.org/t/p/w500${filterTv.poster_path}`} alt={filterTv.title} />
              <div className="card-body">
                <h6 className={`card-text`}>{filterTv.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieShow;
