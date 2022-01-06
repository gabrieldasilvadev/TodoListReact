import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";

const App = () => {
  return (
    <TodoContext>
      <div className="uk-container">
        <Navbar></Navbar>
        <TodoList></TodoList>
      </div>
    </TodoContext>
  );
};

export default App;
