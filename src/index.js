import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import PageHeader from './components/pageHeader';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageHeader />
    {/* <App /> */}
    <AppRoutingOne />
  </React.StrictMode>,
);
reportWebVitals();
