import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {TodoItem} from '../TodoItem';

const deleteMock = jest.fn();
const toggleComplete = jest.fn();

const task = {
  id: '1',
  text: 'TestTask',
  completed: false,
};

const renderComponent = () =>
  render(
    <ApplicationProvider {...eva} theme={eva.dark}>
      <TodoItem
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteMock}
      />
    </ApplicationProvider>,
  );

describe('<TodoItem />', () => {
  it('should render the component', () => {
    const {getByTestId} = renderComponent();

    const item = getByTestId('todo-item');

    expect(item).toBeDefined();
  });

  it('should have specific styles when task is uncompleted', () => {
    const {getByTestId} = renderComponent();

    const text = getByTestId(`taskText-${task.id}`);

    expect(text).not.toHaveStyle({textDecorationLine: 'line-through'});
  });

  it('should delete task when button is clicked', () => {
    const {getByTestId} = renderComponent();

    const button = getByTestId(`deleteButton-${task.id}`);

    fireEvent.press(button);

    expect(deleteMock).toHaveBeenCalled();
  });

  it('should toggle task when checkbox is clicked', () => {
    const {getByTestId} = renderComponent();

    const checkbox = getByTestId(`completeButton-${task.id}`);

    fireEvent.press(checkbox);

    expect(toggleComplete).toHaveBeenCalled();
  });

  it('should have specific styles when task is completed', () => {
    const {getByTestId} = render(
      <ApplicationProvider {...eva} theme={eva.dark}>
        <TodoItem
          task={{...task, completed: true}}
          toggleComplete={toggleComplete}
          deleteTask={deleteMock}
        />
      </ApplicationProvider>,
    );

    const text = getByTestId(`taskText-${task.id}`);

    expect(text).toHaveStyle({textDecorationLine: 'line-through'});
  });
});
