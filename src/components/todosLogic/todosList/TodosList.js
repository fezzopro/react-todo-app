import React from 'react';
import TodoItem from './TodoItem';

export default function TodosList({ data, setData }) {
  return data.map((item) => (
    <React.Fragment key={item.index}>
      <TodoItem item={item} data={data} setData={setData} />
    </React.Fragment>
  ));
}
