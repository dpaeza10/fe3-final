import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/fe3-final">
      <Context>
        <App/>
      </Context>
    </BrowserRouter>
);