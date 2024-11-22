import React, {memo} from 'react';
import {
  Text,
  Animated as RNAnimated,
  View,
  ActivityIndicator,
} from 'react-native';
import Animated, {LinearTransition} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

import type {Character} from '../../../types/common/UserCharacter.type';

import {useAnimated} from '../../../hooks/useAnimated';

import {styles} from './Card.styles';

type CardProps = Pick<Character, 'id' | 'name' | 'image'> & {
  onSwipe: (id: number) => void;
};

const Card = memo(({id, name, image, onSwipe}: CardProps) => {
  const handleSwipe = () => onSwipe(id);

  const {pan, panResponder, runningSpring} = useAnimated({
    onFinished: handleSwipe,
  });

  return (
    <Animated.View layout={LinearTransition}>
      <RNAnimated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.cardItem]}>
        <View style={styles.cardContent}>
          <FastImage
            style={styles.image}
            source={{
              uri: image,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.itemText}>{name}</Text>
          {runningSpring && (
            <ActivityIndicator
              size="small"
              color="#00ff00"
              style={styles.indicator}
            />
          )}
        </View>
      </RNAnimated.View>
    </Animated.View>
  );
});

export default Card;
