import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/root/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

export function initReact(store: any) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}