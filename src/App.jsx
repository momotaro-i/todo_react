import { useState } from "react";
import { ComplateTodos } from "./component/ComplateTodos";
import { InComplateTodos } from "./component/InComplateTodos";
import { InputTodo } from "./component/InputTodo";
import "./styles.css";

export const App = () => {
  //入力した値を格納する配列
  const [inputText, setInputText] = useState("");
  //未完了のTODOを格納する配列
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  //完了のTODOを格納する配列
  const [complateTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setInputText(event.target.value);
  };

  //追加ボタン
  const onClickAdd = () => {
    if (inputText === "") return;
    const newTodos = [...incomplateTodos, inputText];
    setIncomplateTodos(newTodos);
    setInputText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    // spliceは一つ目の引数に何番目の要素かを受け取り、2つ目の要素にいくつ削除するかを入れる
    setIncomplateTodos(newTodos);
  };

  //完了ボタン
  const onClickComplate = (index) => {
    const newIncomplateTodos = [...incomplateTodos];
    newIncomplateTodos.splice(index, 1);

    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newComplateTodos);
  };

  //戻すボタン
  const onClickBack = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);

    //...complateTodosに消した要素を追加
    const newIncomplateTodos = [...incomplateTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newIncomplateTodos);
  };

  return (
    <>
      <InputTodo
        inputText={inputText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 5}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red", paddingLeft: "20px" }}>
          登録できるtodoは5個までです。消化してください。
        </p>
      )}
      <InComplateTodos
        todos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <ComplateTodos todos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
