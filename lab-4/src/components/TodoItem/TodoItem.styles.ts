import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  text: {
    flex: 1,
    padding: 8,
  },
  throughText: {
    textDecorationLine: 'line-through',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    width: 90,
  },
});
