import React from "react";

export const InComplateTodos = (props) => {
  const { todos, onClickComplate, onClickDelete } = props;
  return (
    <>
      <div className="incomplate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-item">
                <p>{todo}</p>
                <button onClick={() => onClickComplate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                {/* 関数に引数を渡してあげたい場合は新しく関数を生成する */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
