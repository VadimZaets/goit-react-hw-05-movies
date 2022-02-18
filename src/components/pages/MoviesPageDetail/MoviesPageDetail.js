import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMoviesDetails } from "../../../utils/api";
import { Route, Switch, useHistory, useLocation } from "react-router";
import Cast from "../../Cast/Cast";
import Reviews from "../../Reviews/Reviews";
import styles from "./MoviesPageDetail.module.css";

export default function MoviesPageDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const URLwrapper = "https://image.tmdb.org/t/p/w400/";
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    getMoviesDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);
  const goBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };
  return (
    <>
      <span>
        <button type="button" onClick={goBack} className={styles.btn}>
          Go back
        </button>
      </span>
      <div className={styles.container}>
        <img
          src={movie.poster_path ? `${URLwrapper}${movie.poster_path}` : null}
          className={styles.image}
          alt=""
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{movie.original_title}</h2>
          <p className={styles.infoTitle}>User score: {movie.vote_average}</p>
          <p className={styles.infoTitle}>Overview</p>
          <p>{movie.overview}</p>
          {movie.genres && (
            <>
              <p className={styles.infoTitle}>Genres: </p>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className={styles.additional}>
        <p>Additional information</p>
        <ul className={styles.additionalList}>
          <li>
            <Link
              className={styles.btnAdditional}
              to={`/movies/${movie.id}/cast`}
            >
              Cast
            </Link>
          </li>
          <li className={styles.additionalItem}>
            <Link
              className={styles.btnAdditional}
              to={`/movies/${movie.id}/reviews`}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Switch>
    </>
  );
}
