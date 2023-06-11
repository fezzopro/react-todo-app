import Header from './Header';
import TodosLogic from './todosLogic/TodosLogic';

export default function TodoApp() {
  return (
    <>
      <ul>
        <Header />
        <TodosLogic />
      </ul>
      <div className="button-container">
        <button type="button">Clear all completed</button>
      </div>
    </>

  );
}
