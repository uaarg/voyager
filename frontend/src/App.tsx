import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import './index.css';

function App() {
  return (
    <div className="App flex flex-col h-screen">
        <Header />
        <Main />
    </div>
  );
}

export default App;
