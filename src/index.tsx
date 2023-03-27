import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";

import store from './utilities/redux.storage';
import { router } from './utilities/router';
import { Provider } from 'react-redux';
import { Worker } from '@react-pdf-viewer/core';
import Login from './pages/login.page';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Icon } from '@iconify/react';

const firebaseConfig = {
  apiKey: "AIzaSyDKptTbf1xuKo6aOGoOLijxl7q8L5Ggals",
  authDomain: "digiform-access.firebaseapp.com",
  projectId: "digiform-access",
  storageBucket: "digiform-access.appspot.com",
  messagingSenderId: "381392132818",
  appId: "1:381392132818:web:469c32a78776d358272b0b",
  measurementId: "G-QRLCHTPLP0"
};
const app = initializeApp(firebaseConfig);


const App = () => {
  const auth = getAuth(app);
  const [loggedIn,setLoggedIn] = useState(false)
  const [loading,setLoading] = useState(true)

  onAuthStateChanged(auth, user => {
    setLoading(true)
    if (user) {
      setLoggedIn(true)
      setLoading(false)
    } 
    else {
      setLoggedIn(false)
      setLoading(false)
    }
  })

  return (
    <>
      {
        loading?(
          <>
            <div className='w-full h-full absolute top-0 left-0 flex flex-col'>
              <Icon icon="line-md:loading-twotone-loop" className='mx-auto my-auto' width="100"/>
            </div>
          </>
        ):(
          <>
            {
              loggedIn?(
                <RouterProvider router={router} />
              ):(
                <Login />
              )
            }
          </>
        )
      }
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <App />
      </Worker>
    </Provider>
  </React.StrictMode>
);