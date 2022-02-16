import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/screens/Home/Home";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
