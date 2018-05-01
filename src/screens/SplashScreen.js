import React from 'react';
import { Text, View, Image } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Card, CardSection, Button } from '../components/common';


class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <GestureRecognizer style={styles.viewStyle} onSwipeLeft={() => this.props.navigation.navigate('Login')} >

          <Text style={styles.textStyle}>
          Budlr at Your Service.
          </Text>
          <View style={{ height: '57%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.manImageStyle} source={{ uri: 'https://www.clker.com/cliparts/3/u/P/P/q/W/walking-icon-hi.png' }} />
          </View>
          <Text style={styles.arrows} >
            > > >
          </Text>
      </GestureRecognizer>
    );
  }
}


const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'white'
  },
  textStyle: {
    fontStyle: 'italic',
    paddingTop: 150,
    paddingLeft: 20,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  manImageStyle: {
    resizeMode: 'contain',
    height: 350,
    width: 175,
    marginTop: 40,
    marginLeft: 130

  },
  textStyleSmall: {
    fontStyle: 'italic',
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  arrows: {
    fontSize: 40,
    marginLeft: '60%',
    marginTop: 25
  }
};

export default SplashScreen;

/* static navigationOptions = {
  header: { visible: false }
}; */

// <Button onPress={() => this.props.navigation.navigate('Login')} > Continue </Button>
