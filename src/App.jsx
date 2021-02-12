import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Imcomplete } from "./components/Imcomplete";
import { Complete } from "./components/Complete";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcomp, setImcomp] = useState([]);
  const [comp, setComp] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcomp, todoText];
    setImcomp(newTodos);
    setTodoText("");
  };

  const onClickDele = (index) => {
    const newTodos = [...imcomp];
    newTodos.splice(index, 1);
    setImcomp(newTodos);
  };

  const onClickFin = (index) => {
    const newImcompTodos = [...imcomp];
    newImcompTodos.splice(index, 1);

    const newCompTodos = [...comp, imcomp[index]];

    setImcomp(newImcompTodos);
    setComp(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...comp];
    newCompTodos.splice(index, 1);

    const newImcompTodos = [...imcomp, comp[index]];
    setComp(newCompTodos);
    setImcomp(newImcompTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcomp.length >= 5}
      />

      {imcomp.length >= 5 && (
        <p style={{ color: "red" }}>登録できるのは５個まで</p>
      )}

      <Imcomplete
        imcomp={imcomp}
        onClickFin={onClickFin}
        onClickDele={onClickDele}
      />

      <Complete comp={comp} onClickBack={onClickBack} />
    </>
  );
};
