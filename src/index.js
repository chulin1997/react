import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App44.jsx";

ReactDOM.render(
  // 如果App同时被Provider包裹，Provider和Router的内外层都可以
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
