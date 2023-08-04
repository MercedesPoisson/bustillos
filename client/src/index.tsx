import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import store from "./redux/store";
import { Provider } from "react-redux"
import AutoRender from './redux/autorender';

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AutoRender />
          <App />
        </React.StrictMode>
      </Provider>
</BrowserRouter>,
  
document.getElementById('root')
);