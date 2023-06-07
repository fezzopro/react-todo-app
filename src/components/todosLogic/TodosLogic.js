import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './todosList/TodosList';

export default function TodosLogic() {
  const [data, setData] = useState([]);
  return (
    <>
      <InputTodo data={data} setData={setData} />
      <TodosList data={data} setData={setData} />
    </>
  );
}
