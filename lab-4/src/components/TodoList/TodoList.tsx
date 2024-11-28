import React from 'react';
import {Divider, List} from '@ui-kitten/components';

import type {Task} from '../../types';

import {TodoItem} from '../TodoItem';
import {TodoListHeader} from '../TodoListHeader';

import {styles} from './TodoList.styles';

type PropsT = {
  tasks: Task[];
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TodoList = ({tasks, toggleComplete, deleteTask}: PropsT) => {
  const handleRenderItem = ({item}: {item: Task}) => (
    <TodoItem
      task={item}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
    />
  );

  return (
    <List
      data={tasks}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={<TodoListHeader numberOfTasks={tasks.length} />}
      stickyHeaderIndices={[0]}
      keyExtractor={item => item.id}
      renderItem={handleRenderItem}
      ItemSeparatorComponent={Divider}
      testID="todo-list"
    />
  );
};

export default TodoList;
