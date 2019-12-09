import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';
import './css/style.css';
import App from '../src/components/App';

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
document.getElementById('root'));
