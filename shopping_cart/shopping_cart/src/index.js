import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

import reducer from "./redux/reducers";

let myStore =createStore(reducer);



ReactDOM.render(
  <Provider store={myStore}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

