import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function _() {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { movie_id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div key={movieDetail.id}>
            <img src={movieDetail.medium_cover_image} alt="FailLoadImage" />
            <h2>{movieDetail.title}</h2>
            <p>{movieDetail.summary}</p>
            <ul>
              {movieDetail.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}