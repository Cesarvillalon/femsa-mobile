import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';

import type {Character} from '../../../types/common/UserCharacter.type';

import {ListHeader} from '../../atoms';
import {Card} from '../../molecules';

import {styles} from './CharacterList.styles';

type CharacterListProps = {
  characters: Character[];
};

const CharacterList = ({characters}: CharacterListProps) => {
  const [elements, setElements] = useState<Character[]>(characters);

  const filterCharacter = useCallback(
    (id: number) =>
      setElements(prevElements => prevElements.filter(item => item.id !== id)),
    [],
  );

  const renderItem = ({item}: {item: Character}) => (
    <Card
      id={item.id}
      name={item.name}
      image={item.image}
      onSwipe={filterCharacter}
    />
  );

  const handleKeyExtractor = (item: Character) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={elements}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={handleKeyExtractor}
        ListHeaderComponent={<ListHeader />}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default CharacterList;
