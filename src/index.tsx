import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";

import store from './utilities/redux.storage';
import { router } from './utilities/router';
import { Provider } from 'react-redux';
import { Worker } from '@react-pdf-viewer/core';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <RouterProvider router={router} />
      </Worker>
    </Provider>
  </React.StrictMode>
);