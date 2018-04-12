import React from 'react';
import DOM from 'react-dom';
import './styles/index.css';
import App from './App';
import ServiceWorker from './registerServiceWorker';

DOM.render(<App/>, document.getElementById('root'));
ServiceWorker();
