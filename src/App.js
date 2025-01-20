import React, { useState, useCallback, memo } from 'react';

const Child = memo(({ onAction }) => {
  console.log('Child rendering...');
  return (
    <div>
      <button onClick={onAction}>Child Action</button>
    </div>
  );
});

const App = () => {
  const [count, setCount] = useState(0);

  // This function changes on every render because it's recreated
  const handleAction = useCallback(() => {
    alert('Action from child!');
  }, []); 

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Parent Increment</button>
      <Child onAction={handleAction} />
    </div>
  );
};

export default App;
