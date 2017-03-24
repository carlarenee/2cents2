import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import LoginSignup from './components/onboard/LoginSignup';
import Login from './components/onboard/Login';
import Signup from './components/onboard/Signup';
import Home from './components/navBar/Home';
import Nav from './components/navBar/Nav';
import Charities from './components/navBar/Charities';
import Profile from './components/navBar/Profile';
import Activity from './components/navBar/Activity';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      loginUsername: ''
    }
  }


  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'LoginSignup'
        }}
        renderScene={(route, navigator) => {
            _navigator = navigator;
            if (route.id === 'LoginSignup') {
              return (
                <LoginSignup
                  navigator={navigator}
                  title={'LoginSignup'}
                />
              )
            }
            if (route.id === 'Login') {
              return (
                <Login
                  navigator={navigator}
                  title={'Login'}
                />
              )
            }
            if (route.id === 'Signup') {
              return (
                <Signup
                  navigator={navigator}
                  title={'Signup'}
                />
              )
            }
            if (route.id === 'Nav') {
              return (
                <View style={styles.container}>
                  <Nav
                    navigator={navigator}
                    title={'Nav'}
                  />
                </View>
              )
            }
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  navBar: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    bottom: 0,
  },
  navBarItem: {
    width: '25%'
  },
  one: {
    backgroundColor: 'green'
  },
  two: {
    backgroundColor: 'yellow'
  },
  three: {
    backgroundColor: 'blue'
  },
  four: {
    backgroundColor: 'purple'
  }
})
