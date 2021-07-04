/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component, Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/services/routes/';
class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Fragment>
        <StatusBar backgroundColor={'skyblue'} />
        <SafeAreaView style={{flex: 0, backgroundColor: 'skyblue'}} />
        <Routes />
        <SafeAreaView style={{backgroundColor: 'skyblue'}} />
      </Fragment>
    );
  }
}

export default App;


