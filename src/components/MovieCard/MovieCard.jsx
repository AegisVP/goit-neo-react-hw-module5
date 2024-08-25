import PropTypes from 'prop-types';
import poster from '../../assets/poster.jpg';
import css from './MovieCard.module.css';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie, state}) {
  return (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`} className={css.card} state={state}>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : poster } alt={movie.title} className={css.image} />
        <h3 className={css.title}>{movie.title}</h3>
      </Link>
    </li>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.object,
};
