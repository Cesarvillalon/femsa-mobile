import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';

import {styles} from './TodoListHeader.styles';

type PropsT = {
  numberOfTasks: number;
};

const TodoListHeader = ({numberOfTasks}: PropsT) => {
  const theme = useTheme();

  return (
    <View
      testID="todo-list-header"
      style={[
        styles.container,
        {backgroundColor: theme['background-basic-color-2']},
      ]}>
      <Text style={styles.title}>Tasks</Text>
      <Text testID="number-of-tasks">{numberOfTasks}</Text>
    </View>
  );
};

export default TodoListHeader;
