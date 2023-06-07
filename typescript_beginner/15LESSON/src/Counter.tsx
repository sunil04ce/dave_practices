import { ChangeEvent, ReactNode, useReducer } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" onChange={handleTextInput} />
        <h2>{state.text}</h2>
      </div>
    </>
  );
};
export default Counter;
