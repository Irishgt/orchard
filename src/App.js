import React from 'react';
import FirstComponent from './components/firstComponent'; 
import SecondComponent from './components/secondComponent'; 
import './App.scss'; 

const App = () => {
  return (
    <div className='mainWrapper'>
      <FirstComponent /> 
      <SecondComponent /> 
    </div>
  );
};

export default App;
