import React from 'react';
import { View } from 'react-native';

const MenuSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { MenuSection };
