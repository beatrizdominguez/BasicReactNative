import React from 'react';
import {StyleSheet, Text, Image, StatusBar, SafeAreaView} from 'react-native';

import {appName} from './../../constants/Config';
import Colors from './../../constants/Colors';

import Spacing from './../components/Spacing';

const IMAGENAME = require('./../../res/icon.png');

export default function HomeScreen(props) {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={IMAGENAME} />
        <Spacing />
        <Text style={styles.appName}>{appName}</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
  },
  appName: {
    color: Colors.white,
    fontSize: 24,
  },
});
