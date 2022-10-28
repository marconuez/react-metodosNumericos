import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <BrowserRouter>
            <HomeScreen/>
        </BrowserRouter>
    </React.StrictMode>
)