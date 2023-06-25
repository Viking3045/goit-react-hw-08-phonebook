import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LinearIndeterminate from 'services/LinearIndeterminate';
import css from 'components/SharedLayout/SharedLayout.module.css';

import Header from 'components/Navbar/Header';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <Header />
        </nav>
      </header>

      <Suspense fallback={<LinearIndeterminate />}>
        <Outlet />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ fontSize: 15 }}
      />
    </div>
  );
};

export default SharedLayout;
