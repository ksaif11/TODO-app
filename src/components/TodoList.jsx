import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const Todos = useSelector((state) => state.todos);

  console.log('Filtered Todos:', Todos);

  return (
    <ul>
      <h1 className="my-2 text-md italic">Your TODO's are...</h1>
      {Todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;