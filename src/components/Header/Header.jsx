import css from './Header.module.css';
import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className={clsx('section ', css.header)}>
      <div className={clsx('container', css.headerContainer)}>
        <Navigation />
      </div>
    </header>
  );
}
