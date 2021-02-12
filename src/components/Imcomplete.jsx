import React from "react";

export const Imcomplete = (props) => {
  const { imcomp, onClickFin, onClickDele } = props;
  return (
    <div className="imcomplete">
      <p className="title">未完了のTODO</p>
      <ul>
        {imcomp.map((todo, index) => {
          return (
            <div key={todo} className="flex">
              <li>{todo}</li>
              <button onClick={() => onClickFin(index)}>完了</button>
              <button onClick={() => onClickDele(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
