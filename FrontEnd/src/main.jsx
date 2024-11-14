import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Routes  from './routes.jsx';
import GlobalStyles from './Styles/GlobalStyles.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
    <GlobalStyles/>
  </StrictMode>
);