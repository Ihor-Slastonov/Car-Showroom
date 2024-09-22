import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { VehicleProvider } from '../VehicleContext/VehicleContext';

import Header from '../Header/Header';
import GoTopButton from '../GoTopButton/GoTopButton';
import MyLoader from '../common/MyLoader/MyLoader';

const SharedLayout = () => {
  return (
    <VehicleProvider>
      <Header />
      <main>
        <Suspense fallback={<MyLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <GoTopButton />
    </VehicleProvider>
  );
};

export default SharedLayout;
