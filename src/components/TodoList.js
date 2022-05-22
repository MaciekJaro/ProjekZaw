import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
  
}
/*
/********************************************************
* nazwa funkcji: TodoList
*
* 
*
* opis funkcji: Tworzy liste 
*
* autor: Maciej Jaroszyński
* ****************************************************/

export default TodoList;
