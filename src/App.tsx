import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoContext from "./contexts/TodoContext";

const App = () => {
  return (
    <TodoContext>
      <div className="uk-container">
        <BrowserRouter>
          <Navbar></Navbar>
          <br />
          <Routes>
            <Route path="/" element={<TodoList />}></Route>

            <Route path="/create" element={<AddTodo/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </TodoContext>
  );
};

export default App;

{
  /* <Navbar></Navbar>
<TodoList></TodoList> */
}
