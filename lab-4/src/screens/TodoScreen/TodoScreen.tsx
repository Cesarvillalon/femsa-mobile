import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Layout, Input, Button, useTheme} from '@ui-kitten/components';

import {useTasks} from '../../hooks';

import {styles} from './TodoScreen.styles';
import {TodoList} from '../../components/TodoList';

const TodoScreen = () => {
  const theme = useTheme();

  const {tasks, task, setTask, addTask, toggleComplete, deleteTask} =
    useTasks();

  return (
    <SafeAreaView
      testID="todo-screen"
      style={[
        styles.container,
        {backgroundColor: theme['background-basic-color-1']},
      ]}>
      <Layout style={styles.container}>
        <View style={styles.newTaskContainer}>
          <Input
            placeholder="New Task"
            value={task}
            onChangeText={setTask}
            testID="taskInput"
            numberOfLines={2}
            multiline
          />
          <Button onPress={addTask} testID="addButton">
            Add Task
          </Button>
        </View>
        <TodoList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default TodoScreen;
