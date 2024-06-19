import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <AppRouter />
</React.StrictMode> 
);