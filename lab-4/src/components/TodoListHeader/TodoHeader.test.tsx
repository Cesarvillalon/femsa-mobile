import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import TodoListHeader from './TodoListHeader';

describe('<TodoListHeader />', () => {
  const renderComponent = ({
    numberOfTasks = 0,
  }: {
    numberOfTasks?: number;
  } = {}) =>
    render(
      <ApplicationProvider {...eva} theme={eva.dark}>
        <TodoListHeader numberOfTasks={numberOfTasks} />
      </ApplicationProvider>,
    );

  it('should render the component', () => {
    const {getByTestId} = renderComponent();

    const todoListHeader = getByTestId('todo-list-header');

    expect(todoListHeader).toBeDefined();
  });

  it('should render the title', () => {
    const {getByText} = renderComponent();

    const title = getByText('Tasks');

    expect(title).toBeDefined();
  });

  it('should render the number of tasks', () => {
    let numberOfTasks = 10;

    const {getByTestId} = renderComponent({numberOfTasks});

    let numberOfTasksText = getByTestId('number-of-tasks');

    expect(numberOfTasksText).toHaveTextContent(`${numberOfTasks}`);
  });
});
