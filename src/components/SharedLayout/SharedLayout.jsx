import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { VehicleProvider } from '../VehicleContext/VehicleContext';

import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <VehicleProvider>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </VehicleProvider>
  );
};

export default SharedLayout;
