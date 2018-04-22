import React from 'react';
//import Icon from 'react-native-vector-icons/Fonts/Entypo';
import { TouchableOpacity, Image } from 'react-native';

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingRight: 10 }}>
      <Image style={{ height: 20, width: 20 }} source={{ uri: 'https://www.iconsdb.com/icons/preview/white/search-xxl.png' }} />
    </TouchableOpacity>
  );
};

export { SearchButton };
