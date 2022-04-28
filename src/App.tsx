import './App.css';
import React from 'react';
import ContactContainer from './components/ContactContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import './firebase';
// import  "firebase";
import * as firebase from "firebase/firestore";
// import 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'

const App: React.FC = () => {
  // const firebaseApp = firebase[0];
  // return (
  //   <div>
  //     <h1>React & Firebase</h1>
  //     <h2>By @farazamiruddin</h2>
  //     <code>
  //       <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
  //     </code>
  //   </div>
  // );

  // require('dotenv').config()
  // console.log(process.env)

  // require('dotenv').config()



  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
