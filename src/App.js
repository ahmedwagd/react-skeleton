import React from 'react';
import Articales from './components/Articales';
import Users from './components/Users';

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1
        >
          React Skeletons
        </h1>
      </header>
      <div className="content">
        <Articales />
        <Users
        />
      </div>
    </div>
  )
}

export default App;