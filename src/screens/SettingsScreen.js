import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View, Button, Alert} from 'react-native';
import {get} from 'lodash';

import Colors from './../../constants/Colors';
import Layout from './../../constants/Layout';

export default function SettingScreen({navigation, route}) {
  const {params} = route;

  useEffect(() => {
    const currentOptions = get(params, 'options');
    console.log({params});
  }, [params]);

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <View style={styles.container}>
        <Text>Settings screen</Text>
        <Button
          title="Save"
          color={Colors.primary}
          onPress={() => Alert.alert('Clicked')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginBottom: 10,
  },
  groupContainer: {
    flex: 1,
    marginBottom: 10,
  },
  group: {
    flex: 2,
  },
  headingText: {
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  optionsContent: {
    width: Layout.window.width,
    flex: 1,
    backgroundColor: Colors.gray,
  },
  checkbox: {
    color: Colors.primary,
  },
  option: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
