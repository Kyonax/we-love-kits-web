import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './app/App';
import ScrollToTop from './components/hooks/scroll_top/hook';

const root = createRoot( document.getElementById('root') as HTMLElement );

root.render(
    <BrowserRouter>
        <ScrollToTop>
            <Routes>
                <Route path="/docs-web-testingv-70" element={<App />} / >
            </Routes>
        </ScrollToTop>
    </ BrowserRouter>);

reportWebVitals(console.log);
