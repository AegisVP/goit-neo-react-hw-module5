import PropTypes from 'prop-types';
import css from './Pagination.module.css';

export default function Pagination({ totalPages, page, setPage }) {
  return totalPages > 1 && (
    <div className={css.container}>
      <button className={css.button} onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Prev
      </button>
      <span>{page}</span>
      <button className={css.button} onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
