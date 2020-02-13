import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import BabyNav from './components/BabyNav';

function App() {
  return (
    <div className="App">
      <BabyNav/>
      <MainNav/>

    </div>
  );
}

export default App;
