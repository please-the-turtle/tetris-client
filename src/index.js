import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from 'store/Store';

const store = Store();
export const Context = createContext({
  store
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    store
  }}>
    <Router>
      <App />
    </Router>
  </Context.Provider>
);

reportWebVitals();
