import css from './MovieDetails.module.css';
import poster from '../../assets/poster.jpg';
import PropTypes from 'prop-types';

export default function MovieDetails({ movie = {} }) {
  return (
    movie.id && (
      <div className={css.container}>
        <h1 className={css.title}>{movie.title}</h1>
        <div className={css.info}>
          <img className={css.image} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : poster } alt={movie.title} />
          <p className={css.overview}>{movie.overview}</p>
        </div>
      </div>
    )
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};
