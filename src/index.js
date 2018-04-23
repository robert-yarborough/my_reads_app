import React from 'react';
import DOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';

import App from './App';
import ServiceWorker from './registerServiceWorker';

DOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'));
ServiceWorker();
