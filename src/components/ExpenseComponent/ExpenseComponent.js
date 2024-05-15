import { useState } from "react";

export const Example = ({ count, onIncrement }) => {
  const [localCount, setLocalCount] = useState(count || 0);
  return (
    <>
      <>
        <button onClick={onIncrement}>Click to increase</button>
      </>
    </>
  );
};
