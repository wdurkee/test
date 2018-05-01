import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';

const SearchTile = ({ onPress, image, height, width, title, fontSize }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ height: height, width: width, padding: 30 }} >
      <View style={styles.backgroundContainer}>
        <Image source={{ uri: image }} resizeMode='cover' style={styles.backdrop} />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4
  }
};

export { SearchTile };
