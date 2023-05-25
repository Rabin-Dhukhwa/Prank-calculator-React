import React from "react";

export const Button = ({ cls, label, func }) => {
  const clickHandler = () => {
    func(label);
  };
  return (
    <div className={cls} onClick={clickHandler}>
      {label}
    </div>
  );
};
