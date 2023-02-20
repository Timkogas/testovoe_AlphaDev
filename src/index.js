import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import speakersReducer from './store/reducers/speakersReducer';

const store = configureStore({
  reducer: {
    speakers: speakersReducer
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
