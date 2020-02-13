import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import BabyNav from './components/BabyNav';
import Shout from './components/Shout';

function App() {
  return (
    <div className="App">
      <BabyNav/>
      <MainNav/>
      <Shout/>

    </div>
  );
}

export default App;
