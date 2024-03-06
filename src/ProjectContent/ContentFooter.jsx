import { useState } from 'react';

export default function ContentFooter({ tasks, onAddTask, onDeleteTask }) {
  const [enteredText, setEnteredText] = useState('');

  const handleClick = () => {
    if (enteredText.trim() === '') {
      return;
    }
    onAddTask(enteredText);
    setEnteredText('');
  };

  function handleChange(event) {
    setEnteredText(event.target.value);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredText}
          onChange={handleChange}
        ></input>
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
