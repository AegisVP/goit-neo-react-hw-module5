import PropTypes from 'prop-types';
import css from './Pagination.module.css';

export default function Pagination({ totalPages, page, setPage }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={css.container}>
      {page > 1 && (
        <button className={css.button} onClick={() => setPage(page - 1)}>
          Prev
        </button>
      )}
      {totalPages > 1 && <span>{page}</span>}
      {page < totalPages && (
        <button className={css.button} onClick={() => setPage(page + 1)}>
          Next
        </button>
      )}
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
