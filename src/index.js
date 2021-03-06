import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './component/App';



const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

