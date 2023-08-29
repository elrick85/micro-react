import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App1Container from "./components/App1Container";
import App2Container from "./components/App2Container";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl max-w-6xl mx-5">
    <nav className="bg-blue-900 p-5">
      <ul className="flex">
        <li className="text-yellow-400 mr-10 border-2 p-2 border-blue-500">
          <Link to={`app1`}>App1</Link>
        </li>
        <li className="text-yellow-400 border-2 p-2 border-blue-500">
          <Link to={`app2`}>App2</Link>
        </li>
      </ul>
    </nav>
    <div className="bg-blue-200 mt-10 p-5">
      <Outlet></Outlet>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "app1/*",
        element: <App1Container />,
      },
      {
        path: "app2/*",
        element: <App2Container />,
      },
    ],
  },
]);

ReactDOM.render(<RouterProvider
  router={router}
  fallbackElement={<div>Loading route....</div>}
/>, document.getElementById("app"));
