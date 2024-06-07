import { Suspense } from 'react';

import './App.css';

import Router from './Router';
import AppLoader from './components/Loader';

function App() {
  return (
    <div>
      <Suspense fallback={<AppLoader />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
