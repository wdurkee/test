import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TextButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.loginButton}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 30,
    borderWidth: 1,
    borderColor: '#919191',
    borderRadius: 10,
    marginTop: 5
  },
  text: {
    fontSize: 16,
    color: '#919191'
  }
};

export { TextButton };
