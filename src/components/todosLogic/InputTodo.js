export default function InputTodo({ data, setData }) {
  const addNewTask = (task) => {
    setData([...data, task]);

    // localStorage.setItem('list', JSON.stringify(data));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!e.target.value) return;

      addNewTask({
        description: e.target.value,
        completed: false,
        index: data.length + 1,
      });
      e.target.value = '';
    }
  };
  return (
    <>
      <li className="item3">
        <input className="enter" type="text" placeholder="Add to your list..." onKeyDown={handleKeyDown} />
        <i className="material-icons">subdirectory_arrow_left</i>
      </li>
      <li>
        <hr />
      </li>

    </>
  );
}
