import { removeTodo } from "../store/TodoSlice";
import type { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export function TodosList() {
  const dispatch = useDispatch();
  const todoList = useSelector(
    (state: RootState) => state.todos,
  );
  function handleRemoveClick(id: string) {
    dispatch(removeTodo(id));
  }
  console.log(todoList);
  return (
    <div className="flex flex-col py-10 max-w-md
 mx-auto">
      <ol className="text-sm">
        {todoList.map((todo) => (
          <li className="text-xl my-3" key={todo.id}>
            {todo.text}
            <button
              onClick={() => handleRemoveClick(todo.id)}
              className="text-sm mx-5 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
