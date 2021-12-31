import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='uk-container'>
      <Navbar></Navbar>
      <TodoList></TodoList>
    </div>
  )
}

export default App;
