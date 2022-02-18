import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReviews } from "../../utils/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesReviews(movieId).then((data) => setReviews(data));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length === 0 ? (
          <p>
            <b>We don't have any reviews for this movie</b>
          </p>
        ) : (
          reviews.map((review) => (
            <li key={review.id}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
