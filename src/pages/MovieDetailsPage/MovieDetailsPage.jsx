import css from './MovieDetailsPage.module.css';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../api/getMovieData';
import Loader from '../../components/Loader/Loader';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movie, setMovie] = useState({});

  const params = useParams();
  const movieId = params.movieId;
  const location = useLocation();
  const { from, query, page } = location.state || {};
  const returnLink = from ? `${from}${query ? '?' + new URLSearchParams({ page, query }).toString() : ''}` : '/movies';

  useEffect(() => {
    if (!movieId) return;

    setIsError(false);
    setIsLoading(true);

    getMovieDetails(movieId)
      .then(setMovie)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.section}>
      {isLoading && <Loader />}
      {isError && <p className={css.error}>Something went wrong. Please try again later.</p>}
      <Link to={returnLink}>Go back</Link>
      {!isError && !isLoading && movie.id && (
        <>
          <MovieDetails movie={movie} />
          <div className={css.links}>
            <NavLink className={css.link} to="cast" state={{ ...location.state, movieId }} replace={true}>
              Cast
            </NavLink>
            <NavLink className={css.link} to="reviews" state={{ ...location.state, movieId }} replace={true}>
              Reviews
            </NavLink>
          </div>
          <Outlet context={movieId} />
        </>
      )}
    </div>
  );
}
