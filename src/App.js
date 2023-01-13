import TodoInputContainer from "./components/TodoInputContainer";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todoItems"));
    if (todos) {
      setTodoData(todos);
    }
  }, []);

  const handleClickComplete = (id) => () => {
    const newTodoData = todoData.map((data) =>
      data.id === id ? { ...data, done: !data.done } : data
    );
    setTodoData(newTodoData);
    localStorage.setItem("todoItems", JSON.stringify(newTodoData));
  };

  const handleClickImportant = (id) => () => {
    const newTodoData = todoData.map((data) =>
      data.id === id ? { ...data, important: !data.important } : data
    );
    setTodoData(newTodoData);
    localStorage.setItem("todoItems", JSON.stringify(newTodoData));
  };

  const handleEditInput = (id) => (e) => {
    const { value } = e.target;
    const newTodoData = todoData.map((data) =>
      data.id === id ? { ...data, todo: value } : data
    );
    setTodoData(newTodoData);
    localStorage.setItem("todoItems", JSON.stringify(newTodoData));
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    setIsDelete(!isDelete);
  };

  const handleDeleteItem = (id) => () => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
    localStorage.setItem("todoItems", JSON.stringify(newTodoData));
  };

  return (
    <div className="bg-bg-main h-screen w-full">
      <nav className="text-text-main flex mx-2 py-2 h-10">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <h1 className="mx-auto font-bold">wha, todo? </h1>
      </nav>
      <TodoInputContainer todoData={todoData} setTodoData={setTodoData} />
      <span className="w-full block border border-opacity-10 border-text-main "></span>
      <div className="text-text-main flex justify-between items-center mx-4  my-4">
        <div className="space-x-4 text-sm">
          <span className="text-text-main">All</span>
          <span className="text-text-main text-opacity-70">todo</span>
          <span className="text-text-main text-opacity-70">done</span>
        </div>
        <div onClick={handleClickDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
      <div className="mx-4">
        <h2 className="text-text-main text-xl font-bold my-8  ">Todo</h2>
        {todoData.map((data) => (
          <TodoItem
            data={data}
            setTodoData={setTodoData}
            handleClickComplete={handleClickComplete}
            handleClickImportant={handleClickImportant}
            handleEditInput={handleEditInput}
            isDelete={isDelete}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
