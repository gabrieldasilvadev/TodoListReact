import React from 'react';
import { Todo } from './models/Todo';

const TodoList = () => {
  const todos: Todo[] = [
    {id: 1, title: 'Estudar React', done: false},
    {id: 2, title: 'Estudar Java', done: false},
  ];

  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          // coalescência nula(?), caso a variavel for nula, nao vai dar erro.
          todos?.map(
            todo => (<div key={todo.id}>{todo.title}</div>)
          )
        }
      </tbody>
    </table>
  );
}

export default TodoList;
