import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardItem: {
    width: '100%',
    backgroundColor: '#1C2541',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  indicator: {
    position: 'absolute',
    right: 10,
  },
});
