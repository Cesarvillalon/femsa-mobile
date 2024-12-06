import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import type {StackT} from '../types/stack.type';

type NavigationPropT = StackNavigationProp<StackT, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationPropT>();

  const handleNavigation = () => navigation.navigate('Profile');

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={handleNavigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
