import React from 'react';
import {View} from 'react-native';
import {Button, CheckBox, ListItem, Text} from '@ui-kitten/components';

import type {Task} from '../../types';

import {styles} from './TodoItem.styles';

type PropsT = {
  task: Task;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TodoItem = ({task, toggleComplete, deleteTask}: PropsT) => {
  const handleComplete = () => toggleComplete(task.id);

  const handleDelete = () => deleteTask(task.id);

  return (
    <ListItem style={styles.container} testID="todo-item">
      <CheckBox
        checked={task.completed}
        onChange={handleComplete}
        testID={`completeButton-${task.id}`}
      />
      <Text
        style={[styles.text, task.completed && styles.throughText]}
        category="s2"
        testID={`taskText-${task.id}`}>
        {task.text}
      </Text>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={handleDelete}
          size="small"
          style={styles.button}
          appearance="outline"
          status="danger"
          testID={`deleteButton-${task.id}`}>
          Delete
        </Button>
      </View>
    </ListItem>
  );
};

export default TodoItem;
