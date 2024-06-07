import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTES from './ROUTES';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

/**
 * Using react-router in this project might be a bit overkill, but it's a good practice to use it in a real-world project.
 * Also, by using react-router, we can easily add more pages to the project in the future.
 */
const Router = () => {
  return (
    <BrowserRouter basename={'/burger-creator/'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.home} Component={HomePage} />
          <Route path={ROUTES.favorites} Component={FavoritesPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
