import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './popup';
import TestingComponents from './testingComponents';

const root = document.createElement("div")
root.className = "container"
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    {/* <Popup /> */}
    <TestingComponents />
  </React.StrictMode>
);