import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false, login: false };

  onLoginButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true, login: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(() => {
            this.setState({ error: 'Authentication Failed', loading: false });
      });
  }
  onSignupButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true, login: false });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(() => {
        this.setState({ error: 'Sign Up Failed', loading: false });
      });
  }

  onSuccess() {
    this.props.navigation.navigate('Home');
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderLoginButton() {
    if (this.state.loading && this.state.login) {
      return <Spinner size="small" />;
    }

    return (
      <TouchableOpacity style={styles.loginButton} onPress={this.onLoginButtonPress.bind(this)}>
        <Text style={styles.loginText}>
          Log In
        </Text>
      </TouchableOpacity>
    );
  }

  renderSignupButton() {
    if (this.state.loading && !this.state.login) {
      return <Spinner size="small" />;
    }

    return (
      <TouchableOpacity style={styles.loginButton} onPress={this.onSignupButtonPress.bind(this)}>
        <Text style={styles.signupText}>
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  }

  renderContent() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Spinner style={{ marginTop: 50, paddingTop: 200 }} size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.formStyle} >
          <View style={styles.sectionText}>
            <Input
              placeholder="user@budlr.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={{ height: 20, width: 100 }}
            />
          </View>
          <View style={styles.sectionText}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

          </View>
        </View>
        <Text style={styles.errorTextStyle}>
            {this.state.error}
        </Text>
        <View>
          {this.renderLoginButton()}
        </View>
        <View>
          {this.renderSignupButton()}
        </View>

        <Image style={styles.manImageStyle} source={{ uri: 'https://www.clker.com/cliparts/3/u/P/P/q/W/walking-icon-hi.png' }} />

      </View>

    );
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
  errorTextStyle: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'red',
    paddingTop: 5,
    marginBottom: 10
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  sectionText: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  formStyle: {
    height: 100,
    width: '90%',
    borderWidth: 1,
    borderColor: '#919191',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 30
  },
  signupText: {
    fontSize: 14
  },
  manImageStyle: {
    resizeMode: 'contain',
    height: 300,
    width: 150,
    marginTop: 100,
    marginLeft: 130
  }
};
export default LoginForm;
