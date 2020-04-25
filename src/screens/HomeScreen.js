import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import Colors from './../../constants/Colors';
import IconButton from './../components/IconButton';

export default function HomeScreen({navigation}) {
  const [title, setTitle] = useState('Hello world!');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <IconButton
            iconName="md-settings"
            action={() => openSettings(navigation)}
            style={styles.icon}
          />
        </>
      ),
    });
  }, [navigation, openSettings]);

  useEffect(() => {
    console.log('The app is loaded');
    // component did mount
  }, []);

  const openSettings = navigation => {
    navigation.navigate('Settings', {
      title,
      setTitle,
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
  icon: {
    fontSize: 24,
    color: Colors.white,
    marginHorizontal: 10,
  },
});
