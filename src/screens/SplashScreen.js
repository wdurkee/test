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
          <Text style={styles.textStyleSmall}>
          Swipe to Start  >>>
          </Text>


          <Image style={styles.manImageStyle} source={{ uri: 'https://www.clker.com/cliparts/3/u/P/P/q/W/walking-icon-hi.png' }} />
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
    alignItems: 'stretch',
    position: 'relative',
    backgroundColor: 'white'
  },
  textStyle: {
    fontStyle: 'italic',
    paddingTop: 100,
    paddingLeft: 20,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  manImageStyle: {
    resizeMode: 'center',
    flex: 1,
    height: 50,
    width: 20,
    paddingLeft: 500,
    paddingTop: 525
  },
  arrowImageStyle: {
    flex: 1,
    height: 100,
    width: 100,
    paddingLeft: 500,
    paddingTop: 650

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
    fontStyle: 'normal',
    paddingTop: 20,
    paddingLeft: 400,
    fontSize: 36,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
};

export default SplashScreen;

/* static navigationOptions = {
  header: { visible: false }
}; */

// <Button onPress={() => this.props.navigation.navigate('Login')} > Continue </Button>
