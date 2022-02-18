import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieList } from "../../../utils/api";
import { useLocation } from "react-router";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const URLwrapper = "https://image.tmdb.org/t/p/w400/";
  const location = useLocation();
  useEffect(() => {
    getMovieList().then((data) => setMovies(data));
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Trending today</h2>
        <ul className={styles.movie}>
          {movies &&
            movies.map((movie) => (
              <li key={movie.id} className={styles.item}>
                <Link
                  className={styles.item__link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: { location } },
                  }}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `${URLwrapper}${movie.poster_path}`
                        : null
                    }
                    className={styles.image}
                    width="300px"
                    alt=""
                  />
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
