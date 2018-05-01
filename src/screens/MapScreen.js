import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';
import { Card, CardSection } from '../components/common';

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map Search',
    headerRight: null
  };
  state = {
        latitude: 34.0431569,
        longitude: -118.26189,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
        provider='google'
        style={styles.map}
        initialRegion={this.state}
        >
          <Marker coordinate={{ latitude: 34.0431569, longitude: -118.26189 }} onPress={() => { this.props.navigation.navigate('Dispensary', { rating: ' 4.9 ', title: 'MedMen', deliveryTime: '|  15 - 20 mins ' }); }} >
            <CustomMarker />
          </Marker>

        </MapView>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});


export default MapScreen;
