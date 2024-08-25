import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

export default function CommonLayout() {
  return (
    <>
      <Header />
      <main className="section">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
