import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const VechilePage = lazy(() => import('../../pages/VechiclePage/VechiclePage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="vechiles/:vechileId" element={<VechilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
