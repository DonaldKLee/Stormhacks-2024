import './App.css';
import TestingComponents from "./testingComponents";
import Switch from '@mui/material/Switch';

<<<<<<< HEAD
function Popup() {
  return (
    <div className="container">
      Hello World

      <a href="../testing/index.html" target='_blank'>Testing</a>
=======
const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function Popup() {
  return (
    <div className="title">
      <h1> Stormhacks 2024</h1>

      <div id="header">
        <span>Quick Settings</span> {/* links to landing page */}
        <span><a href="https://example.com/faq.html" rel="noreferrer">
          Settings </a>
          <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1H2.5C1.39543 1 0.5 1.89543 0.5 3V9C0.5 10.1046 1.39543 11 2.5 11H8.5C9.60457 11 10.5 10.1046 10.5 9V7.5M5.5 6L10.5 1M10.5 1H6.5M10.5 1V5" stroke="#4A6EE0" stroke-linecap="round"></path></svg>
        </span>
      </div>

      <div >
        <span>Activate</span> {/* toggle on + off */}
        <span><Switch {...label} disabled defaultChecked size="small" /></span>
      </div>

>>>>>>> 181009a9564a0502a461aad7cac8bfceb4741809
    </div>

  );
}

export default Popup;