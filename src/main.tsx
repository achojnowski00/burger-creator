import ReactDOM from 'react-dom/client';
import { version } from '../package.json';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

console.log({ version }); //eslint-disable-line
