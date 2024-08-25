import css from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieCast } from '../../api/getMovieData';
import Loader from '../Loader/Loader';
import CastMember from '../CastMember/CastMember';

export default function MovieCast() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getMovieCast(movieId)
      .then(setMovieCast)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <p>Something went wrong. Please try again later.</p>}
      {!isError && !isLoading &&
        (movieCast.length > 0 ? (
          <ul className={css.list}>
            {movieCast.map(actor => (
              <CastMember key={actor.id} actor={actor} />
            ))}
          </ul>
        ) : (
          'No cast known for this movie'
        ))}
    </div>
  );
}
