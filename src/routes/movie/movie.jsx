import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./movie.module.css";

import Loading from "../common/loading";

export default function _() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              <img src={movie.medium_cover_image} alt="FailLoadImage" />
              <h2><Link to={{
                  pathname: `/movie/${movie.id}`,
                  state: {
                    apple: 12,
                    banana: 42
                  }
                }}>{movie.title}</Link></h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}