import React from "react";
import { useState, useMemo } from "react";

const TodoInputContainer = ({ todoData, setTodoData }) => {
  const [text, setText] = useState("");

  const newTodoData = useMemo(
    () => [
      ...todoData,
      { id: Date.now(), todo: text, done: false, important: false },
    ],
    [text, todoData]
  );

  const handleCreateTodo = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    localStorage.setItem("todoItems", JSON.stringify(newTodoData));
    setTodoData(newTodoData);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    if (e.nativeEvent.isComposing === false) {
      localStorage.setItem("todoItems", JSON.stringify(newTodoData));
      setTodoData(newTodoData);
      setText("");
    }
  };

  return (
    <div>
      <div className="mx-4 my-2 space-y-2 ">
        <input
          type="text"
          className="w-full h-12 rounded-xl bg-bg-bright px-6 text-text-main"
          placeholder="오늘 할 일을 입력해주세요"
          value={text}
          onChange={handleCreateTodo}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full h-12 rounded-xl text-text-main text-md font-bold bg-primary-main  "
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default TodoInputContainer;
