import './scss/main.scss';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/app";
import ErrorBoundary from './components/error-boundary';

import StoreServiceContext from './dev/store-service-context';
import store from './dev/store';
import storeServices from './dev/services';

const services = storeServices();

ReactDOM.render(
	<StrictMode>
		<Provider store={ store }>
			<ErrorBoundary>
				<StoreServiceContext.Provider value={ services }>
					<Router>
						<App />
					</Router>
				</StoreServiceContext.Provider>
			</ErrorBoundary>
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);

module?.hot.accept();
