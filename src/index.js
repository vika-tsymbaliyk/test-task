import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename='/test-task'>
    <App />
    <GlobalStyle/>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);