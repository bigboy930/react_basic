import React from 'react';
import './app.css';
import Habits from './components/habits';

function App() {
    return <Habits />;

  /*
  const name = 'kibum';
  return (
    <div>      
      <h1>Hello</h1>
      {name && <h1>Hello! {name}</h1>}
      {['❤️', '🍎'].map(item => (
          <h1>{item}</h1>
        ))
      }
    </div>
  );
  /*/
}

export default App;