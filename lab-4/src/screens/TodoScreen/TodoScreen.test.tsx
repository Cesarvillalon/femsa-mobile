/**
 * Integration Testing.
 */

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import TodoScreen from './TodoScreen';

describe('<TodoScreen />', () => {
  const renderScreen = () =>
    render(
      <ApplicationProvider {...eva} theme={eva.dark}>
        <TodoScreen />
      </ApplicationProvider>,
    );

  it('should add a new task', () => {
    const {getByTestId, getByText} = renderScreen();

    const input = getByTestId('@taskInput/container');
    const addButton = getByTestId('addButton');

    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    const task = getByText('New Task');

    expect(task).toBeDefined();
  });

  it('should toggle the task completion status', () => {
    const {getByTestId, getByText} = renderScreen();

    // Add a new task
    const input = getByTestId('@taskInput/container');
    const addButton = getByTestId('addButton');

    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    const task = getByText('New Task');

    expect(task).toBeDefined();

    // Check if the task is not completed
    expect(task).not.toHaveStyle({textDecorationLine: 'line-through'});

    const taskTestId = task.props.testID.split('-')[1];

    // Complete the task
    const completeButton = getByTestId(`completeButton-${taskTestId}`);

    fireEvent.press(completeButton);

    expect(task).toHaveStyle({textDecorationLine: 'line-through'});
  });

  it('should delete a task', async () => {
    const {getByTestId, getByText, queryByText} = renderScreen();

    // Add a new task
    const input = getByTestId('@taskInput/container');
    const addButton = getByTestId('addButton');

    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    const task = getByText('New Task');

    expect(task).toBeDefined();

    const taskTestId = task.props.testID.split('-')[1];

    // Delete the task
    const deleteButton = getByTestId(`deleteButton-${taskTestId}`);

    fireEvent.press(deleteButton);

    const searchedTask = queryByText('New Task');

    expect(searchedTask).toBeNull();
  });
});

/* -------------------------- */

/**
 * Mocking the useTasks hook.
 */

// import React from 'react';
// import {fireEvent, render} from '@testing-library/react-native';
// import {ApplicationProvider} from '@ui-kitten/components';
// import * as eva from '@eva-design/eva';

// import {useTasks} from '../../hooks';

// import TodoScreen from './TodoScreen';

// const addTaskMocked = jest.fn();
// const toggleCompleteMocked = jest.fn();
// const deleteTaskMocked = jest.fn();

// jest.mock('../../hooks', () => ({
//   useTasks: jest.fn(),
// }));

// describe('BDD - Verify task Completion Behavior', () => {
//   beforeAll(() => {
//     (useTasks as jest.Mock).mockReturnValue({
//       tasks: [
//         {id: 1, completed: true, text: 'Task 1'},
//         {id: 2, completed: false, text: 'Task 2'},
//       ],
//       task: '',
//       setTask: jest.fn(),
//       addTask: addTaskMocked,
//       toggleComplete: toggleCompleteMocked,
//       deleteTask: deleteTaskMocked,
//     });
//   });

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   const renderScreen = () =>
//     render(
//       <ApplicationProvider {...eva} theme={eva.dark}>
//         <TodoScreen />
//       </ApplicationProvider>,
//     );

//   it('should render the component correctly', () => {
//     const {getByTestId} = renderScreen();

//     expect(getByTestId('todo-screen')).toBeDefined();
//   });

//   it('should call addTask when the add button is pressed', () => {
//     const {getByTestId} = renderScreen();

//     const addButton = getByTestId('addButton');

//     fireEvent.press(addButton);

//     expect(addTaskMocked).toHaveBeenCalled();
//   });

//   it('should call toggleComplete when the complete button is pressed', () => {
//     const {getByTestId} = renderScreen();

//     const completeButton = getByTestId('completeButton-2');

//     fireEvent.press(completeButton);

//     expect(toggleCompleteMocked).toHaveBeenCalled();
//   });

//   it('should call deleteTask when the delete button is pressed', () => {
//     const {getByTestId} = renderScreen();

//     const deleteButton = getByTestId('deleteButton-2');

//     fireEvent.press(deleteButton);

//     expect(deleteTaskMocked).toHaveBeenCalled();
//   });
// });
