import { Suspense } from 'react';

import { CreateBurgerContextProvider } from './context/CreateBurgerContext';
import { FavouriteBurgersContextProvider } from './context/FavouriteBurgersContext';

import Router from './Router';
import AppLoader from './components/AppLoader';

import './App.css';

function App() {
  return (
    <FavouriteBurgersContextProvider>
      <CreateBurgerContextProvider>
        <div>
          <Suspense fallback={<AppLoader />}>
            <Router />
          </Suspense>
        </div>
      </CreateBurgerContextProvider>
    </FavouriteBurgersContextProvider>
  );
}

export default App;
