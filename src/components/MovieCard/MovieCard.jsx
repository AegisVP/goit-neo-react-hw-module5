import PropTypes from 'prop-types';
import css from './MovieCard.module.css';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <li key={movie.id}>
        <Link to ={`/movies/${movie.id}`} className={css.card}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.image} />
        <h3 className={css.title}>{movie.title}</h3>
        </Link>
    </li>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
