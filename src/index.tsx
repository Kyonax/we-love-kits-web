import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './app/App';
import ScrollToTop from './components/hooks/scroll_top/hook';

const root = createRoot( document.getElementById('root') as HTMLElement );

root.render(<BrowserRouter> <ScrollToTop> <App /> </ScrollToTop> </ BrowserRouter>);

reportWebVitals(console.log);
