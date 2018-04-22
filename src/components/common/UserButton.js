import React from 'react';
//import Icon from 'react-native-vector-icons/Fonts/Entypo';
import { TouchableOpacity, Image } from 'react-native';

const UserButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingLeft: 10 }}>
      <Image style={{ height: 22, width: 22 }} source={{ uri: 'https://www.iconspng.com/uploads/abstract-user-icon-4/abstract-user-icon-4.png' }} />
    </TouchableOpacity>
  );
};

export { UserButton };
