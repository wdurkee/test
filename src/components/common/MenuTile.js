import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';

const MenuTile = ({ onPress, image, height, width, title, fontSize }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ height: height, width: width, padding: 30 }} >
      <View style={styles.backgroundContainer}>
        <Image source={{ uri: image }} resizeMode='cover' style={styles.backdrop} />
      </View>
      <View style={styles.overlay}>
        <Text style={ [styles.headline, { fontSize: fontSize }] }>{title}</Text>
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
  overlay: {
    opacity: 1,
    backgroundColor: '#c2ceb5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4
  },
  headline: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: 5
  }
};

export { MenuTile };

/* <View style={styles.backgroundContainer}>
  <Image source ={require('./img/landing-background.jpg')} resizeMode='cover' style={styles.backdrop} />
</View>
<View style={styles.overlay}>
  <Text style={styles.headline}>It should appear in front of the Background Image</Text>
  <Image style={styles.logo} source={require('./img/logo.png')} />
</View>
*/
