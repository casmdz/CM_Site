import React from 'react';
import ReactDOM from 'react-dom/client';

import App from  './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".