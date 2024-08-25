import css from './Review.module.css';
import PropTypes from 'prop-types';

export default function Review({ review }) {
  return review?.author && (
    <li className={css.item}>
      <h3 className={css.title}>{review.author} <span className={css.date}>{(new Date(review.created_at)).toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric'})}</span></h3>
      <p className={css.content}>{review.content}</p>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
  }),
};
