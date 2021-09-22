import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router';
import "./App.css";
import Main from './components/main/Main';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}