import PropTypes from 'prop-types';
import css from './CastMember.module.css';
import avatar from '../../assets/avatar.jpg'

export default function CastMember({ actor }) {
  return actor?.id && (
    <li className={css.item}>
      <img className={css.image} src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : avatar} alt={actor.name} />
      <p className={css.name}>
        {actor.name} ({actor.character})
      </p>
    </li>
  );
}

CastMember.propTypes = {
  actor: PropTypes.shape({
    id: PropTypes.number,
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }),
};
