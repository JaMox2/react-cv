import { useState } from 'react';
// import UseStateTest from './components/UseStateTest'
// import UseEffectTest from './components/UseEffectTest';
import Header from './components/Header';
import About from './components/About';
import Main from './components/Main';

function App() {


  return (
    <div className='pageLoad'>
      <div className="Cv">
        <Header/>
        <About/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
