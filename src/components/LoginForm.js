import React, { Component } from 'react';
import { Text } from 'react-native';
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
      <Button onPress={this.onLoginButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  renderSignupButton() {
    if (this.state.loading && !this.state.login) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onSignupButtonPress.bind(this)}>
        Sign Up
      </Button>
    );
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@budlr.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

        </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        <CardSection>
          {this.renderLoginButton()}
        </CardSection>
        <CardSection>
          {this.renderSignupButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
