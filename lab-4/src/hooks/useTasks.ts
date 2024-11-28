import {useState} from 'react';

import type {Task} from '../types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = () => {
    setTasks([
      ...tasks,
      {id: Date.now().toString(), text: task, completed: false},
    ]);

    setTask('');
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map(mappedTask =>
        mappedTask.id === id
          ? {...mappedTask, completed: !mappedTask.completed}
          : mappedTask,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(mappedTask => mappedTask.id !== id));
  };

  return {tasks, task, setTask, addTask, toggleComplete, deleteTask};
};
