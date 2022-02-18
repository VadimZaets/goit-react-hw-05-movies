import { useParams } from "react-router-dom";
import { getMoviesCast } from "../../utils/api";
import { useState, useEffect } from "react";
import styles from "./Cast.module.css";
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const URLwrapper = "https://image.tmdb.org/t/p/w400/";

  useEffect(() => {
    getMoviesCast(movieId).then((data) => setCast(data));
  }, [movieId]);
  return (
    <div className={styles.container}>
      <ul className={styles.actor}>
        {cast.length === 0 ? (
          <p>Wait for it</p>
        ) : (
          cast.map((actor) => (
            <li key={actor.id} className={styles.item}>
              <img
                src={
                  actor.profile_path
                    ? `${URLwrapper}${actor.profile_path}`
                    : null
                }
                className={styles.Img}
                alt=""
              />
              <p>
                <b>{actor.name}</b>
              </p>
              <p>Character: {actor.character} </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Cast;
