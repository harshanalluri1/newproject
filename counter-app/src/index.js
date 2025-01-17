import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
 import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters'
import Counter from "./functionalCounterC/counter"


// ReactDOM.render(<Counter/>, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<Counters/> //uncomment this to display class component \
    <Counter/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
