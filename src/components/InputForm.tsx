import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/TodoSlice";

type Props = {
  todo: string;
};

export function InputForm() {
  const { register, handleSubmit } = useForm<Props>();
  // const [todos, setTodos] = useState<todos[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  });

  function onSubmit({ todo }: Props) {
    console.log("Todo: ", todo);
    // setTodos([...todos, {
    //   id: todos.length + 1,
    //   text: todo.trim(),
    // }]);
    // console.log(todos);
    dispatch(addTodo(todo));
    formRef.current?.reset();
  }

  const fieldStyle = "flex flex-row mb-2";
  const { ref, ...rest } = register("todo");

  // function handleRemoveClick(id: number) {
  //     const filteredItem = todos.filter((todo) => {
  //       return todo.id !== id;
  //     });
  //     setTodos(filteredItem);
  // }

  return (
    <div className="flex flex-col py-10 max-w-md
 mx-auto">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <input
            className="p-3"
            type="text"
            id="todo"
            placeholder="Enter the task"
            {...rest}
            ref={(e) => {
              ref(e);
              inputRef.current = e;
            }}
          />
          <button
            type="submit"
            className="mt-2 h-13 px-4 font-semibold bg-black text-white ml-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
