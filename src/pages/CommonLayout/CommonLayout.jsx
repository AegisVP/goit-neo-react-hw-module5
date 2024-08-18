import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function CommonLayout() {
  return (
    <>
      <Header />
      <main className="section">
        <Outlet />
      </main>
    </>
  );
}
