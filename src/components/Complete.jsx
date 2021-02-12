import React from "react";

export const Complete = (props) => {
  const { comp, onClickBack } = props;
  return (
    <div className="complete">
      <p className="title">完了のTODO</p>
      <ul>
        {comp.map((todo, index) => {
          return (
            <div key={todo} className="flex">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
