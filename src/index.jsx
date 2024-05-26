import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ClientList } from './components/client-detail';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "cliente",
    element: <ClientList />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-zinc-950 text-zinc-50 antialiased">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

reportWebVitals();
