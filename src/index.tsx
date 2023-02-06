import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {worker} from "./mocks/browser";
import { BrowserRouter }  from "react-router-dom";

worker.start({
    onUnhandledRequest: "bypass"
})
.then(() => {

    ReactDOM.render(
        <React.StrictMode>
           <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
    
    reportWebVitals();
}).catch(console.error)

