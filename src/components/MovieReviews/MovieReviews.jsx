import css from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieReviews } from '../../api/getMovieData';
import Loader from '../Loader/Loader';
import Review from '../Review/Review';

export default function MovieReviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getMovieReviews(movieId)
      .then(setMovieReviews)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <p>Something went wrong. Please try again later.</p>}
      {!isError && !isLoading &&
        (movieReviews.length > 0 ? (
          <ul className={css.list}>
            {movieReviews.map(review => (
              <Review key={review.id} review={review} />
            ))}
          </ul>
        ) : (
          'No reviews yet'
        ))}
    </div>
  );
}
