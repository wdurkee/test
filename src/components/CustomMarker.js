import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button, Input, List, ListSection} from './common';

class CustomMarker extends React.Component {
  render() {
    return (
      <View style={styles.markerBox}>

          <Text style={styles.titleText}>MedMen</Text>
          <View style={styles.info}>
            <Image style={{ height: 7, width: 7 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOshcJkmYWYYilyAHPayOP8kZUwpjBpYkv2lHFjywYiYgXDK_j' }} />
            <Text style={{ fontSize: 7 }} >
              4.9
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', color: 'white' }} >More</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = {
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    marginTop: 5
  },
  markerBox: {
    backgroundColor: '#d9e2ce',
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#919191',
    alignItems: 'center',
    justifyContent: 'center',

  },
  info: {
    paddingTop: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  titleText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
};
export default CustomMarker;
