import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Spinner } from '../components/common';
import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {
  static navigationOptions = {
    headerLeft: null
  };
  state = { loggedIn: null };


  componentWillMount() {
    firebase.initializeApp({
     apiKey: 'AIzaSyCduGBTH1Eh2Tin2MRM3kMGZFYOcs16jaM',
     authDomain: 'budlrv1-d3849.firebaseapp.com',
     databaseURL: 'https://budlrv1-d3849.firebaseio.com',
     storageBucket: 'budlrv1-d3849.appspot.com',
     messagingSenderId: '323541602733'
   });
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
   });
   firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        this.props.navigation.navigate('Home');
        break;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner sixe="large" />
          </View>
        );
    }
  }
  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
  }
};

export default LoginScreen;
