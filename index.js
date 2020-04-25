/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './src/screens/SplashScreen';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'SplashScreen'};
    setTimeout(() => {
      this.setState({currentScreen: 'App'});
    }, 3000);
  }
  render() {
    const {currentScreen} = this.state;
    let mainScreen =
      currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />;
    return mainScreen;
  }
}

AppRegistry.registerComponent(appName, () => Main);
