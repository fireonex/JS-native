import React from 'react';
import './App.css';

function App() {
  const names = ['Dimych', 'Sveta', 'Katya', 'Viktor']
  const users = [
      {name: 'Dimych'},
      {name: 'Sveta'},
      {name: 'Katya'},
      {name: 'Viktor'}
  ]

  const liElement = users.map((u, index) => <li key={index}>{u.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElement}
      </ul>
    </div>
  );
}

export default App;
