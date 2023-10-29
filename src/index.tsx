import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './app/App';

const root = createRoot( document.getElementById('root') as HTMLElement );

root.render(<BrowserRouter> <App /> </ BrowserRouter>);

reportWebVitals(console.log);
