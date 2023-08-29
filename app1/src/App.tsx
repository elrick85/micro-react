import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App1 from "./App1";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl p-5">
    <div>Name: app1</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <div>
      <App1></App1>
    </div>
  </div>
);
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("app"));
