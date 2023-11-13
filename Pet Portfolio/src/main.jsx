import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from './pages/Homepage.jsx';
import Scarlet from './pages/Scarlet.jsx';
import Nellie from './pages/Nellie.jsx';
import Luna from './pages/Luna.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/scarlet',
        element: <Scarlet />
      },
      {
        path: '/nellie',
        element: <Nellie />
      },
      {
        path: '/luna',
        element: <Luna />
      },
    ],
  },
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
