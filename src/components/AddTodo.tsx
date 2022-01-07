import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TodoContextType } from "../contexts/TodoContextType";

const schema = yup
  .object()
  .shape({
    title: yup.string().required("Tarefa invalida"),
  })
  .required();

interface AddTodoForm {
  title: string;
}

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddTodoForm, event: any) => {
    addTodo(data.title);
    event.target.reset();
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
      <h4>Nova tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          // name="title"
          id="title"
          placeholder="Adicione uma tarefa..."
          className="uk-input"
          {...register("title")}
        />
        <span>
          <small>
            <strong className="uk-text-danger"></strong>
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">Enviar</button>
      </div>
    </form>
  );
};

export default AddTodo;
