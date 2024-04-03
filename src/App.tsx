import { Provider } from "react-redux";
import { TodosList } from "./components/TodosList";
import { store } from "./store/store";
import { InputForm } from "./components/InputForm";

function App() {
  return (
    <Provider store={store}>
      <InputForm />
      <TodosList />
    </Provider>
  );
}

export default App;
