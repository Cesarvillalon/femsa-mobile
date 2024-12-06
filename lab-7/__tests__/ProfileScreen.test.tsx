import React from 'react';
import {render} from '@testing-library/react-native';

import {NavigationContainer} from '@react-navigation/native';

import ProfileScreen from '../src/screens/ProfileScreen';

test('ProfileScreen component renders correctly', () => {
  const {toJSON} = render(
    <NavigationContainer>
      <ProfileScreen />
    </NavigationContainer>,
  );

  expect(toJSON()).toMatchSnapshot();
});
