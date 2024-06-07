import { Suspense } from 'react';

import { CreateBurgerContextProvider } from './context/CreateBurgerContext';

import Router from './Router';
import AppLoader from './components/AppLoader';

import './App.css';

function App() {
  return (
    <CreateBurgerContextProvider>
      <div>
        <Suspense fallback={<AppLoader />}>
          <Router />
        </Suspense>
      </div>
    </CreateBurgerContextProvider>
  );
}

export default App;
