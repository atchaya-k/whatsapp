import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import App from './App';
const store=createStore (reducers, composeWithDevTools (
	applyMiddleware (thunk),
	// other store enhancers if any
  ));
//const store = createStore(reducers,applyMiddleware(thunk))
ReactDOM.render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.getElementById('root'));

