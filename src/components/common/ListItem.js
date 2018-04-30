import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ListDescription } from './ListDescription';
import { ListImage } from './ListImage';

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.containerStyle}>
      <ListImage image={props.image} />
      <ListDescription />
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    width: '100%',
    height: 80,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    shadowColor: '#dcdee2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  }
};

export { ListItem };
