import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlIO4JHoScrfo4MbNc_1AdDJlcusc4zCQ",
  authDomain: "coderhouse-c4f50.firebaseapp.com",
  projectId: "coderhouse-c4f50",
  storageBucket: "coderhouse-c4f50.appspot.com",
  messagingSenderId: "172659104977",
  appId: "1:172659104977:web:29e413320ac2dd847af9f0",
  measurementId: "G-YCVTHH6JC8"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
