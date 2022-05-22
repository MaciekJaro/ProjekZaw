import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import uuid from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });
/*
/********************************************************
* nazwa funkcji: TodoForm
*
* 
*
* opis funkcji: Tworzy formularz
*
* autor: Maciej Jaroszyński
* ****************************************************/
const deleteTask = (index) => {
  let splice = toDoList.filter((item, i) => i !== index);
  updateToDOList(splice);
}
/*
/********************************************************
* nazwa funkcji: deleteTask
*
* 
*
* opis funkcji: Usuwa element z listy
*
* autor: Maciej Jaroszyński
* ****************************************************/
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
/*
/********************************************************
* nazwa funkcji: handleTaskInputChange
*
* 
*
* opis funkcji: zawiera nowe dane wejściowe z onChange
*
* autor: Maciej Jaroszyński
* ****************************************************/
  function handleSubmit(e) {
    e.preventDefault(); 
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }
  /*
/********************************************************
* nazwa funkcji: handleSubmit
*
* 
*
* opis funkcji: zapobiega odświeżaniu przeglądarki,usuwa ciąg znaków spacji
*
* autor: Maciej Jaroszyński
* ****************************************************/

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
