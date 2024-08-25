import PropTypes from 'prop-types';
import css from './Pagination.module.css';

export default function Pagination({ totalPages, page, setPage }) {
  return (
    totalPages > 1 && (
      <div className={css.container}>
        <button className={css.button} onClick={() => setPage(parseInt(page) - 1)} disabled={parseInt(page) <= 1}>
          {'<<< Prev'}
        </button>

        <span>Page {page} of {totalPages}</span>
        <button className={css.button} onClick={() => setPage(parseInt(page) + 1)} disabled={parseInt(page) >= parseInt(totalPages)}>
          {'Next >>>'}
        </button>
      </div>
    )
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
