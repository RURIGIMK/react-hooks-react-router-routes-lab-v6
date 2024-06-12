import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'found';
import routes from './routes';

const BrowserRouter = createBrowserRouter({ routes });

ReactDOM.render(
  <RouterProvider router={BrowserRouter}>
    {routes}
  </RouterProvider>,
  document.getElementById('root')
);
