import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import qs from "query-string";
import { searchMovies } from "../../../utils/api";
import styles from "./MoivesPage.module.css";
export default function MoviesPage() {
  const [input, setInput] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { query } = qs.parse(location.search);
  const [movies, setMovies] = useState([]);
  const URLwrapper = "https://image.tmdb.org/t/p/w400/";
  useEffect(() => {
    query && searchMovies(query).then((movies) => setMovies(movies));
  }, [query]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const setSearch = (input) => {
    history.push({ pathname: "/movies", search: "?query=" + input });
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setSearch(input);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={hendleSubmit} className={styles.SearchForm}>
        <input
          type="text"
          autoComplete="off"
          value={input}
          className={styles.input}
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}></button>
      </form>
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
  );
}
