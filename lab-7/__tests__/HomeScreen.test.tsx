import React from 'react';
import {render} from '@testing-library/react-native';

import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../src/screens/HomeScreen';

test('HomeScreen component renders correctly', () => {
  const {toJSON} = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>,
  );

  expect(toJSON()).toMatchSnapshot();
});
