//Component imports
import App from './App.jsx';
//Css imports
import './index.css';
//Library import
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
