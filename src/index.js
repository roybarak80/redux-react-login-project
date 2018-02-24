import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

//components

import requireAuth from './components/require_authentication';
import App from './components/App';
import reducers from './reducers';
import Resources from './components/resources';
import News from './components/news';

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)}/>
        <Route path="news" component={requireAuth(News)}/>
        </Route>
       
    </Router>

</Provider> ,

 document.getElementById('root'));

