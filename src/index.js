import React from 'react';
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
root.render(<App/>);