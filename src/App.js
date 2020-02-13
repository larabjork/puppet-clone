import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import BabyNav from './components/BabyNav';
import Shout from './components/Shout';
import LeaderBlock from './components/LeaderBlock';

function App() {
  return (
    <div className="App">
      <BabyNav/>
      <MainNav/>
      <Shout/>
      <LeaderBlock/>
    </div>
  );
}

export default App;
