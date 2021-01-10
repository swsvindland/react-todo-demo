import './index.css';

import { ApiProvider } from './contexts/ApiContext';
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <ApiProvider>
            <App />
        </ApiProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
