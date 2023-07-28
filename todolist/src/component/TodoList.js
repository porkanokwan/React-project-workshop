import StatusFilter from "./StatusFilter";
import TodoItem from "./TodoItem";

function TodoList(prop) {
  const {
    todos,
    handleClickChangeStatus,
    handleDeleteTodo,
    handleClearComplete,
    filteredTodo,
    setFilteredTodo,
  } = prop;
  return (
    <div className="boxList">
      <ul className="todoList">
        {todos.map((item, index) => (
          <li key={item.id}>
            <TodoItem
              item={item}
              handleClickChangeStatus={handleClickChangeStatus}
              handleDeleteTodo={handleDeleteTodo}
            />
          </li>
        ))}
      </ul>

      <StatusFilter
        todos={todos}
        handleClearComplete={handleClearComplete}
        filteredTodo={filteredTodo}
        setFilteredTodo={setFilteredTodo}
      />
    </div>
  );
}

export default TodoList;
