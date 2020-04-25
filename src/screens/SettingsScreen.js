import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import {get} from 'lodash';

import Colors from './../../constants/Colors';

export default function SettingScreen({navigation, route}) {
  const {params} = route;
  const [name, setName] = useState('');

  const buttonClicked = () => {
    const setTitle = get(params, 'setTitle');
    setTitle(`Hello ${name}!`);
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your name"
          onChangeText={name => setName(name)}
          value={name}
        />
        <Text>Your name is:</Text>
        <Text style={styles.textName}>{name}</Text>
        <Button
          title="Correct!"
          color={Colors.primary}
          onPress={() => buttonClicked()}
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
    padding: 10,
  },
  textInput: {
    padding: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.ligthGray,
    borderWidth: 1,
  },
  textName: {
    fontSize: 30,
  },
});
