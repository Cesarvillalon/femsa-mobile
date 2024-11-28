import {waitFor} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';

import {useTasks} from './useTasks';

describe('useTasks ', () => {
  const renderCustomHook = () => renderHook(() => useTasks());

  it('should addTask by updating the tasks state', async () => {
    const {result} = renderCustomHook();

    const newTask = 'Todo Item';

    act(() => {
      result.current.setTask(newTask);
    });

    act(() => {
      result.current.addTask();
    });

    await waitFor(() => {
      expect(result.current.tasks[0].text).toBe(newTask);
    });
  });

  it('should update the task status', async () => {
    const {result} = renderCustomHook();

    const newTask = 'Todo Item';

    act(() => {
      result.current.setTask(newTask);
    });

    act(() => {
      result.current.addTask();
    });

    expect(result.current.tasks[0].completed).toBe(false);

    const task = result.current.tasks[0];

    act(() => {
      result.current.toggleComplete(task.id);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  it('should delete a task', async () => {
    const {result} = renderCustomHook();

    const newTask = 'Todo Item';

    act(() => {
      result.current.setTask(newTask);
    });

    act(() => {
      result.current.addTask();
    });

    expect(result.current.tasks.length).toBe(1);

    const task = result.current.tasks[0];

    act(() => {
      result.current.deleteTask(task.id);
    });

    expect(result.current.tasks.length).toBe(0);
  });
});
