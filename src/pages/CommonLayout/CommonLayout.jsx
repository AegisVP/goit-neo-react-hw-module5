import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Suspense } from 'react';

export default function CommonLayout() {
  return (
    <>
      <Header />
      <main className="section">
        <Suspense fallback={'Loading (common) ...'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
