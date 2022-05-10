import React, { ReactElement, createContext, useState, PropsWithChildren, ContextType } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.scss';
import ChuckNorris from './chuckNorris';


function App(): ReactElement {
  return (
    <div className="app" data-theme={'light'}>
      <section>
        <section>Yo!</section>
        <button className='button-primary'>Click!</button>
      </section>
    </div>
  );
}

export default App;
